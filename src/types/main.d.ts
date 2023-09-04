type Route = {
  title: string;
  navName?: string;
  page: string;
  path: string;
  isAdmin?: boolean;
  isHidden?: boolean;
  isExpanded?: boolean;
  hasParam?: boolean;
  children?: Route[];
};

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

type PageState = {
  itemsPerPage: number;
  itemCount: number;
  currentPage: number;
  startIndex: number;
  endIndex: number;
};
