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
  highlights?: string[];
  links?: ArtifactLink[];
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
  role: 'Backend Developer',
  title: '"I like designing backend systems as much as building them."',
  summary:
    'Backend developer with hands-on experience building Go microservices, APIs, and data-heavy backend systems. Comfortable with ownership across delivery, testing, observability, and technical collaboration.',
  availability:
    'Based in Portugal, available to start ASAP, and open to remote roles and relocation for strong backend opportunities.',
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
  { value: '60s -> 30ms', label: 'worst-case dashboard query' },
  { value: '10k records/s', label: 'validated ingestion burst' },
  { value: '15+ endpoints', label: 'wallet backend delivery' },
];

export const focusAreas = [
  'Go microservices',
  'APIs',
  'Event-driven systems',
  'Analytical data platforms',
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming languages',
    items: ['Go', 'Java', 'Python'],
  },
  {
    title: 'Backend and data',
    items: ['REST APIs', 'Microservices', 'API', 'PostgreSQL', 'ClickHouse', 'Redis', 'RabbitMQ', 'Redpanda Connect', 'Spring Boot'],
  },
  {
    title: 'Testing and delivery',
    items: ['Unit testing', 'Integration testing', 'E2E testing', 'Testcontainers', 'GitHub Actions'],
  },
  {
    title: 'Observability and infrastructure',
    items: ['Docker', 'Prometheus', 'Grafana', 'Kibana', 'Filebeat', 'Ansible'],
  },
  {
    title: 'Academic exposure',
    items: ['Kubernetes', 'Google Cloud Platform'],
  },
];

export const experiences: ExperienceEntry[] = [
  {
    role: 'Backend Developer Intern',
    company: 'Yari Labs',
    href: 'https://www.yarilabs.com/',
    period: 'Jun 2025 – Apr 2026',
    summary:
      'Built and refactored Go microservices and a layered API for a multi-tenant analytics MVP, introduced RabbitMQ-based Shopify webhook flows, and helped drive Redpanda Connect ingestion plus ClickHouse work that cut a worst-case dashboard query from <strong>over 60 seconds</strong> to <strong>under 30 milliseconds</strong>.',
    technologies: ['Go', 'Docker', 'PostgreSQL', 'ClickHouse', 'Redis', 'RabbitMQ', 'Shopify API', 'Redpanda Connect'],
    artifacts: [{ label: 'Internship certificate', href: '/assets/Internship-Certificate.pdf' }],
  },
  {
    role: 'Site Reliability Engineer Intern',
    company: 'Cachapuz',
    href: 'https://www.cachapuz.com/',
    period: 'Sep 2024 – Jan 2025',
    summary:
      'Implemented centralized observability for application logs and system metrics with Prometheus, Kibana, Elasticsearch, and APM agents, giving teams shared visibility into monitored applications.',
    technologies: ['Prometheus', 'Kibana', 'Elasticsearch', 'APM', 'Grafana', 'Filebeat', 'Ansible', 'Azure'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'eDreams ODIGEO',
    href: 'https://www.edreamsodigeo.com/',
    period: 'Feb 2023 – Jun 2023',
    summary:
      'Owned the backend implementation of <strong>two Java Spring Boot microservices</strong> for a digital wallet system, delivering <strong>15+ REST endpoints</strong> for accounts, transactions, PayPal payments, and exchange-rate workflows with end-to-end responsibility across API design, business logic, caching, testing, and documentation.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Redis', 'Docker', 'JUnit', 'Swagger', 'PayPal API'],
    artifacts: [{ label: 'Internship report', href: '/assets/dws.pdf' }],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Tlantic',
    href: 'https://www.tlantic.com/',
    period: 'Sep 2022 – Feb 2023',
    summary:
      'Developed a Go REST API for a retail POS system, creating <strong>25+ endpoints</strong> for inventory, sales, and user management with PostgreSQL, Docker, and JWT while aligning weekly with product managers and a senior engineer on delivery goals.',
    technologies: ['Go', 'Gorilla Mux', 'PostgreSQL', 'Docker', 'JWT'],
    artifacts: [
      { label: 'Internship report', href: '/assets/pos.pdf' },
      { label: 'App showcase', href: 'https://www.youtube.com/watch?v=xsCyOhg4SyU' },
    ],
  },
];

export const featuredWork: ProjectEntry[] = [
  {
    title: 'Analytics Platform and ClickHouse Optimization',
    description:
      'Case study from Yari Labs spanning Go microservices, a layered API, Shopify webhook processing, and ClickHouse-backed analytics for real-time dashboards.',
    tags: ['Go', 'ClickHouse', 'RabbitMQ'],
    highlights: [
      'Cut a worst-case dashboard query from <strong>over 60 seconds</strong> to <strong>under 30 milliseconds</strong>.',
      'Validated Redpanda Connect ingestion bursts around <strong>10k records per second</strong>.',
      'Built backend flows and analytics queries that powered real-time dashboard widgets.',
    ],
  },
  {
    title: 'Digital Wallet Backend',
    description:
      'Backend implementation for a digital wallet system at eDreams ODIGEO, covering APIs, business logic, integrations, caching, testing, and delivery documentation.',
    tags: ['Java', 'Spring Boot', 'Payments'],
    highlights: [
      'Delivered <strong>15+ REST endpoints</strong> across <strong>two Spring Boot microservices</strong>.',
      'Owned accounts, transactions, PayPal, and exchange-rate workflows end to end.',
      'Used Redis caching, PostgreSQL, Docker, JUnit, Swagger, and Spring Security.',
    ],
    links: [{ label: 'Internship report', href: '/assets/dws.pdf' }],
  },
  {
    title: 'Retail POS API',
    description:
      'Go API work for a retail POS system at Tlantic, focused on inventory, sales, user management, authentication, and steady delivery coordination.',
    tags: ['Go', 'PostgreSQL', 'JWT'],
    highlights: [
      'Built <strong>25+ endpoints</strong> for inventory, sales, and user management.',
      'Worked with PostgreSQL, Docker, and JWT in a production-oriented backend setting.',
      'Coordinated weekly with product managers and a senior engineer on scope and delivery.',
    ],
    links: [
      { label: 'Internship report', href: '/assets/pos.pdf' },
      { label: 'App showcase', href: 'https://www.youtube.com/watch?v=xsCyOhg4SyU' },
    ],
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
    period: 'Sep 2023 – Oct 2026',
    details: [
      "Expected graduation: Oct 2026. Master's thesis in progress; available to start full-time while completing the degree.",
      'Specializations in Full-Stack Engineering and Software Development (Validation and Maintenance).',
    ],
  },
  {
    degree: 'B.E., Software Engineering',
    institution: 'Polytechnic Institute of Viana do Castelo',
    period: 'Oct 2020 – Jul 2023',
    details: ['GPA: 15.2 / 20.'],
  },
];

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export const formatDate = (value: Date) => dateFormatter.format(value);
