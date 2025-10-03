'use client';

import { useState, useRef } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  Upload,
  FileText,
  Download,
  Copy,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface AnalysisResult {
  id: string;
  summary: string;
  keyPoints: string[];
  wordCount: number;
  createdAt: string;
  documentName: string;
}

const PDFSummarizer = () => {
  const { user } = useUser();
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file only.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      setError('File size must be less than 10MB.');
      return;
    }

    setIsUploading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', user?.id || '');

      const response = await fetch('/api/analyze/summarize', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process PDF');
      }

      const data = await response.json();

      setIsUploading(false);
      setIsAnalyzing(false);

      // Set the result directly since we're now processing synchronously
      setResult({
        id: data.analysisId,
        summary: data.summary,
        keyPoints: data.keyPoints,
        wordCount: data.wordCount,
        createdAt: data.createdAt,
        documentName: data.documentName,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsUploading(false);
      setIsAnalyzing(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadResult = () => {
    if (!result) return;

    const content = `PDF Summary: ${result.documentName}\n\n${result.summary}\n\nKey Points:\n${result.keyPoints.map(point => `• ${point}`).join('\n')}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.documentName}_summary.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/20">
          <FileText className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">PDF Summarizer</h2>
          <p className="text-white/70">
            Upload a PDF and get an AI-powered summary with key points
          </p>
        </div>
      </div>

      {/* Upload Area */}
      <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-purple-600/10">
            <Upload className="h-12 w-12 text-purple-400" />
          </div>

          <h3 className="mb-2 text-xl font-semibold text-white">
            Upload Your PDF
          </h3>
          <p className="mx-auto mb-6 max-w-md text-white/70">
            Drag and drop your PDF file here, or click to browse. Maximum file
            size: 10MB
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading || isAnalyzing}
            className="mx-auto flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-purple-700 disabled:bg-purple-600/50"
          >
            {isUploading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="h-5 w-5" />
                Choose PDF File
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Analyzing State */}
      {isAnalyzing && (
        <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            <h3 className="text-lg font-semibold text-blue-400">
              Analyzing Your Document
            </h3>
          </div>
          <p className="text-blue-300/80">
            Our AI is reading through your PDF and extracting key insights. This
            may take a few moments...
          </p>
          <div className="mt-4 h-2 w-full rounded-full bg-blue-900/30">
            <div
              className="h-2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: '60%' }}
            ></div>
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Result Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Analysis Complete
              </h3>
              <p className="text-white/70">Document: {result.documentName}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadResult}
                className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-600/20 px-4 py-2 text-green-400 transition-colors duration-200 hover:bg-green-600/30"
              >
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-xl border border-green-400/20 bg-gradient-to-br from-green-900/20 to-emerald-800/10 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-semibold text-green-400">Summary</h4>
              <button
                onClick={() => copyToClipboard(result.summary)}
                className="text-green-400/60 transition-colors duration-200 hover:text-green-300"
              >
                {copied ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="leading-relaxed text-green-200/90">
              {result.summary}
            </p>
          </div>

          {/* Key Points */}
          <div className="rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-900/20 to-purple-800/10 p-6">
            <h4 className="mb-4 text-lg font-semibold text-blue-400">
              Key Points
            </h4>
            <ul className="space-y-3">
              {result.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <span className="text-sm font-medium text-blue-400">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-blue-200/90">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-pink-800/10 p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="font-semibold text-purple-400">
                  {result.wordCount}
                </p>
                <p className="text-sm text-purple-300/70">Words Analyzed</p>
              </div>
              <div>
                <p className="font-semibold text-purple-400">
                  {result.keyPoints.length}
                </p>
                <p className="text-sm text-purple-300/70">Key Points</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFSummarizer;
