/**
 * SheCodes AI API Integration
 * Temporary AI service for Cosmic Portals
 */

export interface SheCodesAnalysisOptions {
  type: 'summarize' | 'extract' | 'qa' | 'sentiment';
  maxTokens?: number;
  temperature?: number;
}

export interface SheCodesAnalysisResult {
  summary?: string;
  keyPoints?: string[];
  extractedData?: any;
  sentiment?: 'positive' | 'negative' | 'neutral';
  wordCount: number;
  processingTime: number;
}

export class SheCodesAnalyzer {
  private apiKey: string;
  private baseUrl = 'https://api.shecodes.io/ai/v1/generate';

  constructor() {
    this.apiKey = process.env.SHECODES_AI_API_KEY!;
    if (!this.apiKey) {
      throw new Error('SHECODES_AI_API_KEY environment variable is required');
    }
  }

  async analyzePDF(
    textContent: string,
    options: SheCodesAnalysisOptions
  ): Promise<SheCodesAnalysisResult> {
    const startTime = Date.now();

    try {
      let prompt = '';
      let context = '';

      switch (options.type) {
        case 'summarize':
          prompt = `Please analyze the following document and provide:
1. A comprehensive summary (2-3 paragraphs)
2. 5-7 key points as bullet points
3. The total word count

Document content:
${textContent}

Please format your response as JSON:
{
  "summary": "Your summary here",
  "keyPoints": ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
  "wordCount": 1234
}`;
          context =
            'Please provide a clear and structured analysis in JSON format';
          break;

        case 'extract':
          prompt = `Please extract structured data from the following document:
- Names, dates, numbers, addresses
- Tables and lists
- Key metrics and statistics
- Important entities

Document content:
${textContent}

Please format your response as JSON with appropriate categories.`;
          context = 'Extract structured data and format as JSON';
          break;

        case 'qa':
          prompt = `Based on the following document, provide a comprehensive analysis that would help answer questions about its content:

Document content:
${textContent}

Please provide:
1. Main topics and themes
2. Key information that could be used for Q&A
3. Important facts and figures

Format as JSON.`;
          context =
            'Provide comprehensive analysis for Q&A purposes in JSON format';
          break;

        case 'sentiment':
          prompt = `Analyze the sentiment and tone of the following document:

Document content:
${textContent}

Please provide:
1. Overall sentiment (positive, negative, neutral)
2. Key emotional indicators
3. Tone analysis

Format as JSON.`;
          context = 'Analyze sentiment and provide structured JSON response';
          break;

        default:
          throw new Error('Invalid analysis type');
      }

      const response = await this.callSheCodesAPI(prompt, context);
      const processingTime = Date.now() - startTime;

      return this.parseAnalysisResult(response, options, processingTime);
    } catch (error) {
      console.error('SheCodes analysis error:', error);
      throw new Error('Failed to analyze document');
    }
  }

  private async callSheCodesAPI(
    prompt: string,
    context: string
  ): Promise<string> {
    const url = new URL(this.baseUrl);
    url.searchParams.append('prompt', prompt);
    url.searchParams.append('context', context);
    url.searchParams.append('key', this.apiKey);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `SheCodes API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.answer || data.response || 'No response received';
  }

  private parseAnalysisResult(
    text: string,
    options: SheCodesAnalysisOptions,
    processingTime: number
  ): SheCodesAnalysisResult {
    try {
      // Try to parse as JSON first
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return {
          ...parsed,
          processingTime,
          wordCount: parsed.wordCount || this.estimateWordCount(text),
        };
      }

      // Fallback: parse structured text
      return this.parseStructuredText(text, options, processingTime);
    } catch (error) {
      console.error('Error parsing analysis result:', error);
      return {
        summary: text,
        keyPoints: [text],
        wordCount: this.estimateWordCount(text),
        processingTime,
      };
    }
  }

  private parseStructuredText(
    text: string,
    options: SheCodesAnalysisOptions,
    processingTime: number
  ): SheCodesAnalysisResult {
    const lines = text.split('\n').filter(line => line.trim());
    const keyPoints: string[] = [];
    let summary = '';

    lines.forEach(line => {
      if (line.includes('•') || line.includes('-') || line.match(/^\d+\./)) {
        keyPoints.push(line.replace(/^[•\-\d\.\s]+/, '').trim());
      } else if (line.length > 50) {
        summary += line + ' ';
      }
    });

    return {
      summary: summary.trim(),
      keyPoints: keyPoints.length > 0 ? keyPoints : [text],
      wordCount: this.estimateWordCount(text),
      processingTime,
    };
  }

  private estimateWordCount(text: string): number {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  }

  // Method for tracking usage analytics
  async trackUsage(
    userId: string,
    analysisType: string,
    processingTime: number
  ) {
    try {
      console.log(
        `SheCodes Usage tracked: User ${userId}, Type: ${analysisType}, Time: ${processingTime}ms`
      );

      // Example: Save to Supabase analytics table
      // await supabase.from('usage_analytics').insert({
      //   user_id: userId,
      //   event_type: 'shecodes_api_call',
      //   event_data: {
      //     analysis_type: analysisType,
      //     processing_time_ms: processingTime
      //   }
      // });
    } catch (error) {
      console.error('Error tracking usage:', error);
    }
  }
}

// Export singleton instance
export const sheCodesAnalyzer = new SheCodesAnalyzer();
