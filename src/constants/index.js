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
  meta,
  starbucks,
  tesla,
  shopify,
  ecommerce,
  news,
  portfolio,
  aris,
} from '../assets'

export const navLinks = [
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

const services = [
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

const technologies = [
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
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it would be impossible to make a website as beautiful as I imagined, but Hendry proved me wrong.',
    name: 'Aris',
    designation: 'UI/UX Design',
    company: '',
    image: aris,
  },
]

const projects = [
  {
    id: 1,
    name: 'Ecommerce Full Features',
    description:
      'The ecommerce application I have developed serves both sellers and buyers, enabling users to engage in transactions with a wide and diverse product catalog. It offers detailed product information, images, and ensures user security, along with various other features that enhance user convenience.',
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
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/hendryprasetyo/ecomerce ',
  },
  {
    id: 2,
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
    id: 3,
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
