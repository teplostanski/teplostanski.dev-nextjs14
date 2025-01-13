export function normalizePath(
  path: string,
  leadingSlash: boolean,
  trailingSlash: boolean,
): string {
  if (leadingSlash) {
    path = path.startsWith('/') ? path : `/${path}`
  }
  if (!leadingSlash) {
    path = path.startsWith('/') ? path.slice(1) : path
  }
  if (trailingSlash) {
    path = path.endsWith('/') ? path : `${path}/`
  }
  if (!trailingSlash) {
    path = path.endsWith('/') ? path.slice(0, -1) : path
  }

  return path
}
