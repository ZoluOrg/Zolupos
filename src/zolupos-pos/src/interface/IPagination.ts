export interface IPagination<T> {
  currentPage: number;
  totalPages: number;
  TotalItems: number;
  data: T;
}
