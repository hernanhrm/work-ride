export interface StandardResponse<T> {
  data?: T;
  errorMessage?: string;
  successfulMessage?: string;
}
