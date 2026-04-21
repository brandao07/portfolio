import { siteMeta } from './site';

export type ResourceLink = {
  label: string;
  href: string;
};

export type SectionCopy = {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
};

export type HeroStat = {
  value: string;
  label: string;
  targetId: string;
};

export type HeroMetaItem = {
  label: string;
  value: string;
};

export type HeroAsideCard = {
  title: string;
  description?: string;
  meta?: HeroMetaItem[];
  chips?: string[];
  chipLabel?: string;
  note?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  href: string;
  period: string;
  summary: string;
  technologies: string[];
  links?: ResourceLink[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type ProjectEntry = {
  id: string;
  title: string;
  context: string;
  problem: string;
  work: string;
  result: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  links?: ResourceLink[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  institutionHref?: string;
  period: string;
  details?: string[];
};

export const heroEyebrow = 'Open to backend roles';

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

export const heroAsideCards: HeroAsideCard[] = [
  {
    title: 'Now',
    description: siteMeta.availability,
    meta: [
      { label: 'Start', value: 'ASAP' },
      { label: 'Timezone', value: 'Portugal' },
      { label: 'Open to', value: 'Remote or relocation' },
    ],
  },
  {
    title: 'Currently working with',
    chipLabel: 'Current stack',
    chips: ['Go', 'PostgreSQL', 'ClickHouse', 'RabbitMQ'],
    note: 'Mostly around production APIs, analytical storage, and event-driven flows.',
  },
  {
    title: 'Expanding into',
    chipLabel: 'Expanding into',
    chips: ['Kubernetes', 'Helm', 'Google Cloud Platform'],
    note:
      'Building more depth in infrastructure, deployment, and operability to grow from backend delivery into stronger platform-aware engineering.',
  },
];

export const experienceSection: SectionCopy = {
  id: 'experience',
  kicker: 'Experience',
  title:
    'Building backend systems across APIs, data pipelines, observability, and production-oriented internships.',
  intro: 'APIs, messaging, analytical storage, and reliability work with real delivery constraints.',
};

export const projectsSection: SectionCopy = {
  id: 'projects',
  kicker: 'Featured work',
  title: 'Selected engineering case studies from backend delivery and performance work.',
  intro: 'Three compact case studies from backend delivery, performance, and product-facing systems work.',
};

export const skillsSection: SectionCopy = {
  id: 'skills',
  kicker: 'Skills',
  title: 'A backend-focused toolkit shaped by services, data systems, testing, and observability.',
  intro: 'Tools and concepts that keep showing up in backend delivery.',
};

export const educationSection: SectionCopy = {
  id: 'education',
  kicker: 'Education',
  title: 'Formal training that supports practical software engineering work.',
  intro: 'Academic grounding that supports production-focused engineering work.',
};

export const researchSection: SectionCopy = {
  id: 'research',
  kicker: 'Research',
  title: 'Research stays visible, but secondary.',
  intro:
    'I keep academic work separate from the main hiring narrative, but it still reflects how I approach rigor, measurement, and technical depth.',
};

export const researchTeaserLabel = 'See research and publications';

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
    links: [{ label: 'Internship certificate', href: '/assets/Internship-Certificate.pdf' }],
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
    links: [{ label: 'Internship report', href: '/assets/dws.pdf' }],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Tlantic',
    href: 'https://www.tlantic.com/',
    period: 'Sep 2022 – Feb 2023',
    summary:
      'Developed a Go REST API for a retail POS system, creating <strong>25+ endpoints</strong> for inventory, sales, and user management with PostgreSQL, Docker, and JWT while aligning weekly with product managers and a senior engineer on delivery goals.',
    technologies: ['Go', 'Gorilla Mux', 'PostgreSQL', 'Docker', 'JWT'],
    links: [
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
    metrics: [{ value: '15+', label: 'REST endpoints shipped' }],
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
    metrics: [{ value: '25+', label: 'endpoints delivered' }],
    tags: ['Go', 'PostgreSQL', 'JWT'],
    links: [
      { label: 'Internship report', href: '/assets/pos.pdf' },
      { label: 'App showcase', href: 'https://www.youtube.com/watch?v=xsCyOhg4SyU' },
    ],
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
