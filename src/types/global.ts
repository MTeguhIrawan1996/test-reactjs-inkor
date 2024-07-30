export interface IInfo {
  count: number | null;
  pages: number | null;
  next: string | null;
  prev: string | null;
}
export interface GResponse<T> {
  info: IInfo;
  results: T[];
}
