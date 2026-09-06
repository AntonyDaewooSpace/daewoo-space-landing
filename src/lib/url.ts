const raw = import.meta.env.BASE_URL;

/** BASE_URL guaranteed to end with a single "/" (Astro is inconsistent about this). */
export const BASE = raw.endsWith('/') ? raw : `${raw}/`;

/** Prefix a site-root-relative path with the deploy base. `withBase('foo')` → `/base/foo`. */
export const withBase = (path: string) => BASE + path.replace(/^\//, '');
