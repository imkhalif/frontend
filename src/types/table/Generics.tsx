export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface TableProps<T> {
  title?: string;
  columns: Column<T>[];
  rows: T[];
}
