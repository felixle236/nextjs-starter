export interface PaginationRequest {
  keyword?: string;
  skip?: number;
  limit?: number;
}

export interface PaginationResponse<T> {
  data: Array<T>;
  pagination: {
    skip: number;
    limit: number;
    total: number;
  };
}

export interface DataResponse<T> {
  data: T;
}
