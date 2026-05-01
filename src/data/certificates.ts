import { yariLabsTechnologies, type SectionCopy } from './portfolio';

export type CertificateEntry = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
};

const certificateImages = {
  amigoscode: '/assets/certificates/amigoscode_logo.jpeg',
  datacamp: '/assets/certificates/datacampinc_logo.jpeg',
  mongodb: '/assets/certificates/mongodbinc_logo.jpeg',
  udemy: '/assets/certificates/udemy_logo.jpeg',
  yariLabs: '/assets/certificates/yarilabs_logo.jpeg',
};

export const certificatesPageSection: SectionCopy = {
  id: 'certificates',
  kicker: 'Certificates',
  title: 'Verified training, internships, and professional learning.',
  intro:
    'A compact archive of certificates from internships, technical courses, and learning programs that support my backend engineering work.',
};

export const certificates: CertificateEntry[] = [
  {
    title: 'Certificate of Summer Internship',
    issuer: 'Yari Labs',
    date: 'Jul 2025',
    image: certificateImages.yariLabs,
    skills: yariLabsTechnologies,
  },
  {
    title: "SQL and PostgreSQL: The Complete Developer's Guide",
    issuer: 'Udemy',
    date: 'Jun 2023',
    image: certificateImages.udemy,
    skills: ['SQL', 'PostgreSQL'],
  },
  {
    title: 'A131: Intro to MongoDB Charts',
    issuer: 'MongoDB',
    date: 'Mar 2023',
    image: certificateImages.mongodb,
    skills: ['Data Analytics', 'MongoDB'],
  },
  {
    title: 'Java Multithreading, Concurrency & Performance Optimization',
    issuer: 'Udemy',
    date: 'Mar 2023',
    image: certificateImages.udemy,
    skills: ['Java'],
  },
  {
    title: 'Getting Started with Spring Boot',
    issuer: 'Amigoscode',
    date: 'Feb 2023',
    image: certificateImages.amigoscode,
    skills: ['Java', 'Spring Boot'],
  },
  {
    title: 'GraphQL with React: The Complete Developers Guide',
    issuer: 'Udemy',
    date: 'Sep 2022',
    image: certificateImages.udemy,
    skills: ['React', 'GraphQL', 'JavaScript'],
  },
  {
    title: "Typescript: The Complete Developer's Guide",
    issuer: 'Udemy',
    date: 'Aug 2022',
    image: certificateImages.udemy,
    skills: ['TypeScript', 'Design Patterns'],
  },
  {
    title: 'The Complete 2022 Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Aug 2022',
    image: certificateImages.udemy,
    skills: ['HTML', 'CSS', 'JavaScript', 'Express.JS', 'React', 'MongoDB'],
  },
  {
    title: 'Introduction To Python',
    issuer: 'DataCamp',
    date: 'Mar 2022',
    image: certificateImages.datacamp,
    skills: ['Python', 'Data Science'],
  },
  {
    title: 'Intermediate SQL Queries',
    issuer: 'DataCamp',
    date: 'Feb 2022',
    image: certificateImages.datacamp,
    skills: ['SQL'],
  },
];
