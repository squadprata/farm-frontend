export const getUrl = (path?: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const normalizedPathname = path && !path.startsWith("/") ? `/${path}` : path;
  return `${baseUrl}${normalizedPathname}`;
};
