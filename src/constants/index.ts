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
  typescript,
  mysql,
  aris,
  ecommerce,
  portfolio,
  news,
  phincon_logo,
  nest_js_logo,
  docker_logo,
  express_js_logo,
  redis_logo,
  rabbitmq_logo,
  next_js_logo,
} from '../assets'

export type TTestimonials = {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}

export const testimonials: TTestimonials[] = [
  {
    testimonial:
      'I thought it would be impossible to make a website as beautiful as I imagined, but Hendry proved me wrong.',
    name: 'Hermawan',
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
export const projects: TProjects[] = [
  // {
  //   id: 1,
  //   name: 'GYM',
  //   description:
  //     'Robust gym website with advanced security features. For the backend, the Go language was chosen to ensure strong performance and security. Meanwhile, the frontend is built using Next.js 13 with TypeScript, which incorporates modern web development practices for a seamless user experience. The goal is to create a simple yet elegant design that encourages users to comfortably interact with the site for a long time.',
  //   tags: [
  //     {
  //       name: 'next.js',
  //       color: 'text-black',
  //     },
  //     {
  //       name: 'go',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'framer-motion',
  //       color: 'text-orange-500',
  //     },
  //     {
  //       name: 'mysql',
  //       color: 'text-blue-500',
  //     },
  //     {
  //       name: 'typescript',
  //       color: 'text-blue-500',
  //     },
  //     {
  //       name: 'react-hook-form',
  //       color: 'text-pink-500',
  //     },
  //     {
  //       name: 'zod',
  //       color: 'text-purple-500',
  //     },
  //   ],
  //   image: gym,
  //   source_code_link: 'https://github.com/hendryprasetyo/news',
  // },
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

export type TExperiences = {
  id: number
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  start_date: string
  end_date: string
  location: string
  points: string[]
}
export const experiences: TExperiences[] = [
  {
    id: 1,
    title: 'Full Stack Developer Trainee',
    company_name: 'PT. Phincon',
    icon: phincon_logo,
    iconBg: '#383E56',
    date: 'October 2023',
    start_date: 'October 2023',
    end_date: 'December 2023',
    location: 'Jakarta - Indonesia',
    points: [
      'Built several individual front-end projects using JavaScript, React.js, Redux-Saga, SCSS, and MUI with multilingual support.',
      'Created back-end services using JavaScript, Express.js, MySQL, Sequelize, and Redis.',
      'Delivered a final full-stack project combining front-end and back-end technologies into a cohesive application.',
    ],
  },
  {
    id: 2,
    title: 'Back-End Developer - MyTelkomsel Mobile Application Project',
    company_name: 'PT. Phincon',
    start_date: 'January 2024',
    end_date: 'Present',
    location: 'Jakarta - Indonesia',
    icon: phincon_logo,
    iconBg: '#383E56',
    date: 'January 2024',
    points: [
      'Contributed to the development and maintenance of the MyTelkomsel mobile application backend using a microservices architecture.',
      'Implemented RESTful APIs using JavaScript (Node.js) with Express.js framework.',
      'Utilized AWS services, Docker containers, and Kubernetes for scalable and reliable deployment.',
      'Managed service communication and traffic using Kong API Gateway and Redis for caching and session management.',
      'Integrated third-party and internal APIs to expand application features and services.',
      'Wrote comprehensive unit tests using Jest to ensure code quality and reliability.',
      'Utilized existing CI/CD pipelines configured by the DevOps team using GitLab CI and Jenkins to deploy and test backend services efficiently.',
    ],
  },
]
export type TTechnologies = {
  name: string
  icon: string
}
export const technologies: TTechnologies[] = [
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
    name: 'Next JS',
    icon: next_js_logo,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Nest JS',
    icon: nest_js_logo,
  },
  {
    name: 'Express JS',
    icon: express_js_logo,
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
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MYSQL',
    icon: mysql,
  },
  {
    name: 'Redis',
    icon: redis_logo,
  },
  {
    name: 'Rabbit MQ',
    icon: rabbitmq_logo,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker_logo,
  },
]

export type TService = {
  title: string
  icon: string
}
export const services: TService[] = [
  {
    title: 'Full-Stack Web Developer',
    icon: web,
  },
  {
    title: 'FrontEnd Developer',
    icon: mobile,
  },
  {
    title: 'BackEnd Developer',
    icon: backend,
  },
]

export type TNavLinks = {
  id: string
  title: string
}

export const navLinks: TNavLinks[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

export const overviewDescriptionText = `
  I'm a skilled <strong>Sofware Development</strong> with experience in <strong>JavaScript</strong>,
  and expertise in frameworks like <strong>React</strong>, <strong>Next.js</strong>, <strong>Nest.js</strong>, <strong>Express.js</strong> and <strong>Node.js</strong>.
  I am a <em>fast learner</em> and collaborate closely with clients to create efficient,
  scalable and user-friendly solutions that solve real-world problems. <br /><br />
  <strong>Let's work together</strong> to make your idea come true!
`
export const projectDescriptionText = `
  The following projects showcase my <strong>skills</strong> and <strong>experience</strong> through real-world examples.
  Each project includes a <strong>live demo</strong> to explore directly. These works reflect my ability to tackle complex challenges,
  use various technologies effectively, and build <em>scalable</em> and <em>user-friendly</em> applications.
`
