export type SocialLink = {
  label: string;
  href: string;
  accent?: boolean;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ArtifactLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  href: string;
  period: string;
  summary: string;
  technologies: string[];
  artifacts?: ArtifactLink[];
};

export type PublicationEntry = {
  title: string;
  authors: string;
  venue: string;
  note?: string;
  links: ArtifactLink[];
};

export type ProjectEntry = {
  title: string;
  description: string;
  tags: string[];
  links: ArtifactLink[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
};

export const siteMeta = {
  name: 'Andre Brandao',
  displayName: 'André Brandão',
  role: 'Backend Engineer',
  title: 'Backend engineer focused on reliable services and data-heavy systems.',
  summary:
    "I'm finishing a Master's in Software Engineering and looking for backend roles where Go, distributed systems, data infrastructure, and observability matter.",
  availability:
    'Available for backend engineering roles and conversations around production systems, platform work, and green software research.',
  email: 'brandao.business@hotmail.com',
  github: 'https://github.com/brandao07',
  linkedin: 'https://www.linkedin.com/in/andre-brandao07/',
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: siteMeta.github },
  { label: 'LinkedIn', href: siteMeta.linkedin },
  { label: 'Email', href: `mailto:${siteMeta.email}`, accent: true },
];

export const heroStats: HeroStat[] = [
  { value: '5', label: 'industry roles' },
  { value: '2', label: 'research outputs' },
  { value: 'Go', label: 'strongest backend lane' },
];

export const focusAreas = [
  'Go services',
  'Distributed systems',
  'Data infrastructure',
  'Observability and ops',
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages and frameworks',
    items: ['Go', 'Java', 'Python', 'Node.js', 'Spring'],
  },
  {
    title: 'Data and messaging',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ClickHouse', 'RabbitMQ', 'Redpanda'],
  },
  {
    title: 'Infrastructure and tooling',
    items: ['Docker', 'Kubernetes', 'Google Cloud', 'Azure', 'Ansible', 'Grafana', 'Prometheus'],
  },
];

export const experiences: ExperienceEntry[] = [
  {
    role: 'Backend Developer Intern',
    company: 'Yari Labs',
    href: 'https://www.yarilabs.com/',
    period: 'Oct 2025 – Apr 2026',
    summary:
      'Worked on backend systems and production services with a focus on commerce integrations, data movement, and operational reliability.',
    technologies: ['Go', 'Docker', 'PostgreSQL', 'ClickHouse', 'Redis', 'RabbitMQ', 'Shopify API', 'Redpanda'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Yari Labs',
    href: 'https://www.yarilabs.com/',
    period: 'Jun 2025 – Jul 2025',
    summary:
      'Summer internship focused on backend development and data infrastructure, building services and working with analytical storage.',
    technologies: ['Go', 'Docker', 'PostgreSQL', 'ClickHouse'],
    artifacts: [{ label: 'Internship certificate', href: '/assets/Internship-Certificate.pdf' }],
  },
  {
    role: 'Site Reliability Engineer',
    company: 'Cachapuz',
    href: 'https://www.cachapuz.com/',
    period: 'Sep 2024 – Jan 2025',
    summary:
      "Curricular internship centered on observability and infrastructure reliability, with tooling across monitoring, logging, and cloud environments.",
    technologies: ['Prometheus', 'Grafana', 'Filebeat', 'Kibana', 'Ansible', 'Azure', 'Go'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'eDreams ODIGEO',
    href: 'https://www.edreamsodigeo.com/',
    period: 'Feb 2023 – Jun 2023',
    summary:
      "Built on a digital wallet system during a bachelor's internship, working across APIs, security, persistence, and third-party payment flows.",
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Redis', 'Docker', 'JUnit', 'Swagger', 'PayPal API'],
    artifacts: [{ label: 'Internship report', href: '/assets/dws.pdf' }],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Tlantic',
    href: 'https://www.tlantic.com/',
    period: 'Sep 2022 – Feb 2023',
    summary:
      "Developed and deployed a full-stack application during a bachelor's internship, with responsibility across APIs, auth, and delivery.",
    technologies: ['Go', 'Gorilla Mux', 'PostgreSQL', 'Docker', 'JWT'],
    artifacts: [
      { label: 'Internship report', href: '/assets/pos.pdf' },
      { label: 'App showcase', href: 'https://www.youtube.com/watch?v=xsCyOhg4SyU' },
    ],
  },
];

export const featuredWork: ProjectEntry[] = [
  {
    title: "Master's thesis: programming language energy efficiency",
    description:
      'Ongoing research towards a more accurate understanding of programming language energy efficiency, with supporting tooling and experimental workflows.',
    tags: ['Research', 'Benchmarking', 'Energy efficiency'],
    links: [{ label: 'GitHub repository', href: 'https://github.com/brandao07/mthesis' }],
  },
  {
    title: 'The Green Side of Lua',
    description:
      'Workshop paper on software sustainability and language-level energy behavior, with a public replication package for reproducibility.',
    tags: ['Publication', 'Lua', 'Green software'],
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
    title: 'Digital wallet engineering report',
    description:
      'A practical backend artifact from the eDreams ODIGEO internship covering the wallet system work, architecture choices, and implementation details.',
    tags: ['Backend', 'Payments', 'Java'],
    links: [{ label: 'Report PDF', href: '/assets/dws.pdf' }],
  },
];

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

export const education: EducationEntry[] = [
  {
    degree: 'M.E., Software Engineering',
    institution: 'University of Minho',
    period: 'Present',
    details: ['Specializations in Full-Stack Engineering and Software Development (Validation and Maintenance).'],
  },
  {
    degree: 'B.E., Software Engineering',
    institution: 'Polytechnic Institute of Viana do Castelo',
    period: 'Jul 2023',
  },
];

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export const formatDate = (value: Date) => dateFormatter.format(value);

