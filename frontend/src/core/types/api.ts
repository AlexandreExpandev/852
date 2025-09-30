import { AxiosError } from 'axios';

export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    timestamp: string;
    [key: string]: any;
  };
}

export interface ErrorPayload {
  code: string;
  message: string;
  details?: any;
}

export interface ErrorResponse {
  success: false;
  error: ErrorPayload;
  timestamp: string;
}

export type ApiError = AxiosError<ErrorResponse>;
