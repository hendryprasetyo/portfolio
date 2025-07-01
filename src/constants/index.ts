import {
  mobile,
  backend,
  web,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  typescript,
  mysql,
  januari_arka,
  mia,
  phincon_logo,
  nest_js_logo,
  docker_logo,
  express_js_logo,
  redis_logo,
  next_js_logo,
  mytsel,
  januari_arka_blur,
  mytsel_blur,
  mia_blur,
  certificate_harisenin,
  certificate_udemy_mern,
  certificate_vsga_junior_web_dev,
} from '../assets'

export type TTestimonials = {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
  image_blur: string
}

export const testimonials: TTestimonials[] = [
  {
    testimonial:
      'Hendry are a *huge* asset to the team! Quick on the draw, sharp with your analysis, and always finding smart solutions—you’ve been key to our success. But the best part? You’re open-minded, easy to work with, and make teamwork smooth *and* fun. Seriously, having you on board is a win! 🚀',
    name: 'Januari Arka',
    designation: 'Officer - IT MyTelkomsel and THE Solutions',
    company: 'PT Telekomunikasi Selular',
    image: januari_arka,
    image_blur: januari_arka_blur,
  },
]

export type TTagsProjects = {
  name: string
  color: string
}

export type TProjects = {
  id: number
  height_image: number
  width_image: number
  name: string
  description: string
  tags: TTagsProjects[]
  image: string
  image_blur: string
  source_code_link?: string
  deeplink?: string
}
export const projects: TProjects[] = [
  {
    id: 1,
    name: 'Outdoor Activity Booking Platform',
    description:
      'A role-based web application designed to facilitate online booking for various outdoor activities across Indonesia, including hiking, camping, and more. The platform supports three user roles—User, Merchant, and Admin—and features ticket purchasing, activity scheduling, and merchant service management.',
    tags: [
      {
        name: 'node.js',
        color: 'text-green-600',
      },
      {
        name: 'Typescipt',
        color: 'text-blue-500',
      },
      {
        name: 'nest.js',
        color: 'text-orange-500',
      },
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'rtk query',
        color: 'text-purple-500',
      },
      {
        name: 'tailwindcss',
        color: 'text-blue-500',
      },
      {
        name: 'redis',
        color: 'text-red-500',
      },
      {
        name: 'rabbitmq',
        color: 'text-yellow-500',
      },
    ],
    image: mia,
    image_blur: mia_blur,
    width_image: 3360,
    height_image: 2024,
    deeplink: 'https://miaworld.my.id',
  },
  {
    id: 2,
    name: 'MyTelkomsel Mobile Application',
    description:
      'Developed scalable and reliable backend services for the MyTelkomsel app using Node.js and Express in a microservices architecture. Implemented RESTful APIs, integrated internal and third-party services, and ensured high-quality code with Jest testing. Managed deployments using Docker, Jenkins, and Kubernetes, and supported full API testing cycles from SIT to FUT.',
    tags: [
      {
        name: 'node.js',
        color: 'text-green-600',
      },
      {
        name: 'microservices',
        color: 'text-blue-500',
      },
      {
        name: 'javascript',
        color: 'text-orange-500',
      },
      {
        name: 'express.js',
        color: 'text-red-500',
      },
      {
        name: 'docker',
        color: 'text-blue-500',
      },
      {
        name: 'aws',
        color: 'text-orange-500',
      },
      {
        name: 'kubernetes',
        color: 'text-blue-500',
      },
      {
        name: 'jenkins',
        color: 'text-black',
      },
      {
        name: 'redis',
        color: 'text-red-500',
      },
    ],
    image: mytsel,
    image_blur: mytsel_blur,
    width_image: 738,
    height_image: 1600,
    deeplink:
      'https://play.google.com/store/apps/details?id=com.telkomsel.telkomselcm&hl=id',
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
    title: 'Back End Developer - MyTelkomsel Mobile Application',
    company_name: 'PT. Phincon',
    start_date: 'January 2024',
    end_date: 'July 2025',
    location: 'Jakarta - Indonesia',
    icon: phincon_logo,
    iconBg: '#383E56',
    date: 'January 2024',
    points: [
      'Contributed to the development and maintenance of the MyTelkomsel mobile application backend using a microservices architecture.',
      'Implemented RESTful APIs using JavaScript (Node.js) with Express.js framework.',
      'Utilized CI/CD pipelines, Jenkins, Docker containers, and Kubernetes for scalable and reliable deployment.',
      'Integrated third-party and internal APIs to expand application features and services.',
      'Wrote comprehensive unit tests using Jest to ensure code quality and reliability.',
      'Supporting the end-to-end API testing process, from System Integration Testing (SIT) to Functional User Testing (FUT).',
    ],
  },
]
export type TTechnologies = {
  name: string
  icon: string
}
export const technologies: TTechnologies[] = [
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
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
  I'm a skilled <strong>Sofware Development</strong> with experience in <strong>JavaScript</strong> and <strong>TypeScript</strong>,
  and expertise in frameworks and library like <strong>React</strong>, <strong>Next.js</strong>, <strong>Nest.js</strong>, <strong>Express.js</strong> and <strong>Node.js</strong>.
  I am a <em>fast learner</em> and collaborate closely with clients to create efficient,
  scalable and user-friendly solutions that solve real-world problems. <br /><br />
  <strong>Let's work together</strong> to make your idea come true!
`
export const projectDescriptionText = `
  The following projects showcase my <strong>skills</strong> and <strong>experience</strong> through real-world examples.
  Each project includes a <strong>live demo</strong> to explore directly. These works reflect my ability to tackle complex challenges,
  use various technologies effectively, and build <em>scalable</em> and <em>user-friendly</em> applications.
`

export const certification = [
  {
    title: 'Full Stack Developer',
    image: certificate_harisenin,
  },
  {
    title: 'MERN Stack Developer',
    image: certificate_udemy_mern,
  },
  {
    title: 'Junior Web Developer',
    image: certificate_vsga_junior_web_dev,
  },
]
