const basePath = import.meta.env.BASE_URL;

export const toSitePath = (path = '') => {
  if (!path || path === '/') {
    return basePath;
  }

  if (path.startsWith('#')) {
    return `${basePath}${path}`;
  }

  if (path.startsWith('/')) {
    return `${basePath}${path.slice(1)}`;
  }

  return `${basePath}${path}`;
};

export const resolveLinkHref = (href: string) => {
  if (href.startsWith('/') || href.startsWith('#')) {
    return toSitePath(href);
  }

  return href;
};
