export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

export interface ListResponse<T> {
  success: true;
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
    timestamp: string;
  };
}

/**
 * Creates a standardized success response object
 */
export function successResponse<T>(data: T, metadata?: Omit<SuccessResponse<T>['metadata'], 'timestamp'>): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: metadata ? {
      ...metadata,
      timestamp: new Date().toISOString()
    } : {
      timestamp: new Date().toISOString()
    }
  };
}

/**
 * Creates a standardized paginated list response object
 */
export function listResponse<T>(
  data: T[],
  page: number,
  pageSize: number,
  total: number
): ListResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      page,
      pageSize,
      total,
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
      timestamp: new Date().toISOString()
    }
  };
}
