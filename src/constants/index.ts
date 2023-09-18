import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  ecommerce,
  news,
  portfolio,
  aris,
  gym,
  typescript,
  mysql,
} from '../assets'

export type TNavLinks = {
  id: string
  title: string
}
export const navLinks: TNavLinks[] = [
  {
    id: 'about',
    title: 'About',
  },
  // {
  //   id: 'work',
  //   title: 'Work',
  // },
  {
    id: 'projects',
    title: 'projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]
export type TService = {
  title: string
  icon: string
}
const services: TService[] = [
  {
    title: 'Full-Stack Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
]

export type TTechnologies = {
  name: string
  icon: string
}
const technologies: TTechnologies[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MYSQL',
    icon: mysql,
  },
  {
    name: 'git',
    icon: git,
  },
]

export type TExperiences = {
  id: number
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}
const experiences: TExperiences[] = [
  {
    id: 1,
    title: 'React.js Developer',
    company_name: 'Freelance',
    icon: aris,
    iconBg: '#383E56',
    date: 'August 2023',
    points: [
      'Developing websites that comply with the accessibility standards, policies and procedures.',
      'Developing and managed web accessibility testing plans and processes, including setting up and configuring tools.',
      'Developing the websites using React.js, Typescript, Tailwind CSS, Framer Motion',
    ],
  },
]
export type TTestimonials = {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}
const testimonials: TTestimonials[] = [
  {
    testimonial:
      'I thought it would be impossible to make a website as beautiful as I imagined, but Hendry proved me wrong.',
    name: 'Aris',
    designation: 'UI/UX Design',
    company: '',
    image: aris,
  },
]
export type TTagsProjects = {
  name: string
  color: string
}
export type TProjects = {
  id: number
  name: string
  description: string
  tags: TTagsProjects[]
  image: string
  source_code_link: string
}
const projects: TProjects[] = [
  {
    id: 1,
    name: 'GYM',
    description:
      'Robust gym website with advanced security features. For the backend, the Go language was chosen to ensure strong performance and security. Meanwhile, the frontend is built using Next.js 13 with TypeScript, which incorporates modern web development practices for a seamless user experience. The goal is to create a simple yet elegant design that encourages users to comfortably interact with the site for a long time.',
    tags: [
      {
        name: 'next.js',
        color: 'text-black',
      },
      {
        name: 'go',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'text-orange-500',
      },
      {
        name: 'mysql',
        color: 'text-blue-500',
      },
      {
        name: 'typescript',
        color: 'text-blue-500',
      },
      {
        name: 'react-hook-form',
        color: 'text-pink-500',
      },
      {
        name: 'zod',
        color: 'text-purple-500',
      },
    ],
    image: gym,
    source_code_link: 'https://github.com/hendryprasetyo/news',
  },
  {
    id: 2,
    name: 'Marketplace Web Site',
    description:
      'The Marcketplace application I have developed serves both sellers and buyers, enabling users to engage in transactions with a wide and diverse product catalog. It offers detailed product information, images, and ensures user security, along with various other features that enhance user convenience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'text-green-600',
      },
      {
        name: 'express.js',
        color: 'text-orange-500',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'text-purple-500',
      },
      {
        name: 'tailwindcss',
        color: 'text-blue-500',
      },
      {
        name: 'formik',
        color: 'text-red-500',
      },
      {
        name: 'yup',
        color: 'text-yellow-500',
      },
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/hendryprasetyo/ecomerce ',
  },
  {
    id: 3,
    name: 'News',
    description:
      'A dynamic news platform that provides users with the convenience to view trending news, equipped with a highly responsive news search feature, enabling users to easily find their desired news articles. Additionally, there is an administrative feature that allows for news creation and website management with a high level of security.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'text-green-600',
      },
      {
        name: 'express.js',
        color: 'text-orange-500',
      },
      {
        name: 'mysql',
        color: 'text-blue-500',
      },
    ],
    image: news,
    source_code_link: 'https://github.com/hendryprasetyo/news',
  },
  {
    id: 4,
    name: 'Portfolio',
    description:
      "A personal web portfolio with features to send messages through email and WhatsApp. The website's design is intentionally kept minimalistic yet captivating. The aim is to facilitate user exploration, leveraging the simplicity of the design to ensure effortless navigation through the content.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'text-blue-500',
      },
      {
        name: 'tailwindcss',
        color: 'text-purple-500',
      },
      {
        name: 'framer-motion',
        color: 'text-orange-500',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/hendryprasetyo/portfolio_aris',
  },
]

export { services, technologies, experiences, testimonials, projects }
