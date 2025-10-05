// Application constants
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_FILE_TYPES: string[] = [];
export const SUPPORTED_FILE_EXTENSIONS: string[] = [];

// API endpoints
export const API_ENDPOINTS = {
  // Removed PDF analysis endpoints
} as const;

// Analysis status (removed PDF analysis constants)
export const ANALYSIS_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const;

// UI messages (removed PDF analysis messages)
export const MESSAGES = {
  ANALYSIS_SUCCESS: 'Analysis completed successfully!',
} as const;
