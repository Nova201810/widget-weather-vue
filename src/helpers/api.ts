export const getUrlWithQuery = (path: string, query?: Record<string, any>) => {
  let url = new URL(path);
  if (!query) return url;
  url.search = new URLSearchParams(query).toString();
  return url;
};