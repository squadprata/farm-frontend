export const getUrl = (path?: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const normalizedPathname = path && !path.startsWith("/") ? `/${path}` : path;

  const URL = `${baseUrl}${normalizedPathname}`;

  return URL;
};
