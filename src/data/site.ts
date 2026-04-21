export type SocialLink = {
  label: string;
  href: string;
  accent?: boolean;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export const siteMeta = {
  name: 'Andre Brandao',
  displayName: 'André Brandão',
  role: 'Backend Developer',
  headline: '"I like designing backend systems as much as building them."',
  summary:
    'Backend developer focused on APIs, Go services, and backend systems that need to hold up in production. I enjoy turning architecture and system design into reliable delivery, testing, and observability work.',
  availability:
    'Based in Portugal, available to start ASAP, and open to remote roles and relocation for strong backend opportunities.',
  email: 'brandao.business@hotmail.com',
  github: 'https://github.com/brandao07',
  linkedin: 'https://www.linkedin.com/in/andre-brandao07/',
};

export const navigationItems: NavigationItem[] = [
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: siteMeta.github },
  { label: 'LinkedIn', href: siteMeta.linkedin },
  { label: 'Email', href: `mailto:${siteMeta.email}`, accent: true },
];
