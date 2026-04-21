import type { ResourceLink, SectionCopy } from './portfolio';

export type PublicationEntry = {
  title: string;
  authors: string;
  venue: string;
  note?: string;
  links: ResourceLink[];
};

export const researchPageSection: SectionCopy = {
  id: 'publications',
  kicker: 'Research',
  title: 'Research and academic work.',
  intro:
    'This page keeps academic work visible without making it the center of the portfolio. The common thread is rigor, measurement, and long-form technical thinking.',
};

export const publications: PublicationEntry[] = [
  {
    title: 'The Green Side of the Lua',
    authors: 'André Brandão, Diogo Matos, Miguel Guimarães, Simão Cunha, João Saraiva',
    venue: 'Greenvolve @ SANER 2026, Limassol, Cyprus',
    links: [
      {
        label: 'Workshop page',
        href: 'https://conf.researchr.org/details/saner-2026/saner-2026-workshops-tutorials-track/16/The-Green-Side-of-the-Lua',
      },
      { label: 'Paper DOI', href: 'https://arxiv.org/abs/2601.16670' },
      { label: 'Replication package', href: 'https://doi.org/10.6084/m9.figshare.29336132' },
    ],
  },
  {
    title: 'Towards a More Accurate Understanding of Programming Language Energy Efficiency',
    authors: 'André Brandão',
    venue: "Master's thesis, University of Minho",
    note: 'In progress',
    links: [{ label: 'GitHub repository', href: 'https://github.com/brandao07/mthesis' }],
  },
];
