export function withBase(path: string): string {
  if (!path) return import.meta.env.BASE_URL;
  if (/^(?:https?:)?\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
