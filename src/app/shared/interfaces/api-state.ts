export interface apiState<T> {
  data: T | null,
  isLoading: boolean,
  error: string | null
}
