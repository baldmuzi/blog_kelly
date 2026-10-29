import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(({ url, redirect }, next) => {
  // GitHub Pages normalizes directory URLs; do the same for old local links.
  if (import.meta.env.DEV && !url.pathname.endsWith('/')) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '')
    const path = url.pathname.slice(base.length)
    if (path === '/about' || path === '/blog' || path.startsWith('/blog/')) {
      return redirect(`${url.pathname}/${url.search}`, 302)
    }
  }
  return next()
})
