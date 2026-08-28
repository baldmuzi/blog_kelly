const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '')

export function withBase(path = '/') {
  return path === '/' ? `${base}/` : `${base}${path}`
}
