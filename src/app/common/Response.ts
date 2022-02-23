import { Pagination } from './Pagination';

export interface DataResponse<T> {
  data: T;
}

export interface PaginationResponse<T> {
  data: Array<T>;
  pagination: Pagination;
}
