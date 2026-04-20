export type SocialLink = {
  label: string;
  href: string;
  accent?: boolean;
};

export type HeroStat = {
  value: string;
  label: string;
  targetId: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ArtifactLink = {
  label: string;
  href: string;
};

export type CaseStudyMetric = {
  value: string;
  label: string;
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
  id: string;
  title: string;
  context: string;
  problem: string;
  work: string;
  result: string;
  metric: string;
  metricLabel: string;
  metrics?: CaseStudyMetric[];
  tags: string[];
  links?: ArtifactLink[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  institutionHref?: string;
  period: string;
  details?: string[];
};

export const siteMeta = {
  name: 'Andre Brandao',
  displayName: 'André Brandão',
  role: 'Backend Developer',
  title: '"I like designing backend systems as much as building them."',
  summary:
    'Backend developer focused on APIs, Go services, and backend systems that need to hold up in production. I enjoy turning architecture and system design into reliable delivery, testing, and observability work.',
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
  { value: '60s -> 30ms', label: 'worst-case dashboard query', targetId: 'case-study-analytics' },
  { value: '10k records/s', label: 'validated ingestion burst', targetId: 'case-study-analytics' },
  { value: '15+ endpoints', label: 'wallet backend delivery', targetId: 'case-study-wallet' },
];

export const focusAreas = [
  'Go microservices',
  'APIs',
  'Event-driven systems',
  'Analytical data platforms',
];

export const currentStack = ['Go', 'PostgreSQL', 'ClickHouse', 'RabbitMQ'];

export const currentStackNote = 'Mostly around production APIs, analytical storage, and event-driven flows.';

export const heroAvailabilityMeta = [
  { label: 'Start', value: 'ASAP' },
  { label: 'Timezone', value: 'Portugal' },
  { label: 'Open to', value: 'Remote or relocation' },
];

export const expandingInto = ['Kubernetes', 'Helm', 'Google Cloud Platform'];

export const expandingIntoNote =
  'Building more depth in infrastructure, deployment, and operability to grow from backend delivery into stronger platform-aware engineering.';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming languages',
    items: ['Go', 'Java', 'Python', 'Bash'],
  },
  {
    title: 'Backend and data',
    items: ['REST APIs', 'Microservices', 'API', 'PostgreSQL', 'ClickHouse', 'Redis', 'RabbitMQ', 'Redpanda Connect', 'Spring Boot'],
  },
  {
    title: 'Testing and delivery',
    items: ['Unit testing', 'Integration testing', 'E2E testing', 'Testcontainers', 'Git', 'GitHub Actions'],
  },
  {
    title: 'Observability and infrastructure',
    items: ['Docker', 'Prometheus', 'Grafana', 'Kibana', 'Filebeat', 'Ansible'],
  },
  {
    title: 'Academic exposure',
    items: ['Kubernetes', 'Google Cloud Platform', 'C#', 'JavaScript', 'TypeScript'],
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
    id: 'case-study-analytics',
    title: 'Analytics Platform and ClickHouse Optimization',
    context:
      'Yari Labs case study spanning Go services, webhook ingestion, analytical storage, and real-time dashboard delivery.',
    problem:
      'The analytics MVP needed ingestion and query paths fast enough for real dashboard usage, not exploratory latency.',
    work:
      'Built and refactored Go services and a layered API, added webhook-driven flows, and worked on Redpanda Connect plus ClickHouse query paths.',
    result:
      'Turned a worst-case dashboard query into production-ready latency while validating ingestion bursts for live analytics workloads.',
    metric: '60s -> 30ms',
    metricLabel: 'worst-case query latency',
    metrics: [
      { value: '60s -> 30ms', label: 'worst-case query latency' },
      { value: '10k records/s', label: 'validated ingestion burst' },
    ],
    tags: ['Go', 'ClickHouse', 'RabbitMQ'],
  },
  {
    id: 'case-study-wallet',
    title: 'Digital Wallet Backend',
    context:
      'eDreams ODIGEO case study covering Java microservices for accounts, transactions, payments, and exchange-rate flows.',
    problem:
      'The wallet backend needed clear service boundaries and production-ready APIs across payment and transaction workflows.',
    work:
      'Implemented two Spring Boot microservices, designed 15+ REST endpoints, and handled caching, testing, security, and delivery documentation.',
    result:
      'Delivered the backend foundation for account, transaction, PayPal, and exchange-rate operations with end-to-end ownership.',
    metric: '15+',
    metricLabel: 'REST endpoints shipped',
    tags: ['Java', 'Spring Boot', 'Payments'],
    links: [{ label: 'Internship report', href: '/assets/dws.pdf' }],
  },
  {
    id: 'case-study-retail-pos',
    title: 'Retail POS API',
    context:
      'Tlantic case study focused on Go API delivery for a retail POS product used around inventory, sales, and user management.',
    problem:
      'The platform needed practical backend coverage for core retail workflows without losing delivery rhythm or coordination.',
    work:
      'Built the REST API with PostgreSQL, Docker, and JWT while working closely with product managers and a senior engineer on scope and delivery.',
    result:
      'Shipped a production-oriented backend surface for core POS operations while keeping the work tightly aligned with product needs.',
    metric: '25+',
    metricLabel: 'endpoints delivered',
    tags: ['Go', 'PostgreSQL', 'JWT'],
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
    institutionHref: 'https://www.uminho.pt/EN',
    period: 'Sep 2023 – Oct 2026',
    details: [
      "Expected graduation: Oct 2026. Master's thesis in progress; available to start full-time while completing the degree.",
      'Specializations in Full-Stack Engineering and Software Development (Validation and Maintenance).',
    ],
  },
  {
    degree: 'B.E., Software Engineering',
    institution: 'Polytechnic Institute of Viana do Castelo',
    institutionHref: 'https://www.ipvc.pt/en/',
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
