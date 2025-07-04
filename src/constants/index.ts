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
  escrow,
  escrow_blur,
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
    testimonial: 'testimonial_januari_arka',
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
    description: 'project_mia_description',
    tags: [
      {
        name: 'Node.js',
        color: 'text-green-600',
      },
      {
        name: 'Typescipt',
        color: 'text-blue-500',
      },
      {
        name: 'Nest.js',
        color: 'text-orange-500',
      },
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'MYSQL',
        color: 'green-text-gradient',
      },
      {
        name: 'RTK Query',
        color: 'text-purple-500',
      },
      {
        name: 'Tailwindcss',
        color: 'text-blue-500',
      },
      {
        name: 'rabbitmq',
        color: 'text-yellow-500',
      },
      {
        name: 'redis',
        color: 'text-red-500',
      },

      {
        name: 'RestAPI',
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
    description: 'project_mytsel_description',
    tags: [
      {
        name: 'Node.js',
        color: 'text-green-600',
      },
      {
        name: 'Microservices',
        color: 'text-blue-500',
      },
      {
        name: 'Javascript',
        color: 'text-orange-500',
      },
      {
        name: 'Express.js',
        color: 'text-red-500',
      },
      {
        name: 'Docker',
        color: 'text-blue-500',
      },
      {
        name: 'AWS',
        color: 'text-orange-500',
      },
      {
        name: 'Kubernetes',
        color: 'text-blue-500',
      },
      {
        name: 'Jenkins',
        color: 'text-black',
      },
      {
        name: 'Redis',
        color: 'text-red-500',
      },
      {
        name: 'Splunk',
        color: 'text-green-600',
      },
      {
        name: 'RestAPI',
        color: 'text-yellow-500',
      },
    ],
    image: mytsel,
    image_blur: mytsel_blur,
    width_image: 738,
    height_image: 1600,
    deeplink: 'https://www.telkomsel.com/mytelkomsel#feature-indihome-mytsel',
  },
  {
    id: 3,
    name: 'Escrow Bussines Web Platform',
    description: 'project_escrow_description',

    tags: [
      {
        name: 'Node.js',
        color: 'text-green-600',
      },
      {
        name: 'React.js',
        color: 'text-blue-500',
      },
      {
        name: 'Typescript',
        color: 'text-orange-500',
      },
      {
        name: 'Tailwindcss',
        color: 'text-blue-500',
      },
      {
        name: 'Nest.js',
        color: 'text-red-500',
      },
      {
        name: 'Docker',
        color: 'text-blue-500',
      },
      {
        name: 'Redis',
        color: 'text-orange-500',
      },
      {
        name: 'Go (Golang)',
        color: 'text-blue-500',
      },
      {
        name: 'MYSQL',
        color: 'text-black',
      },
      {
        name: 'Rabbit MQ',
        color: 'text-red-500',
      },
      {
        name: 'NGINX',
        color: 'text-green-600',
      },
      {
        name: 'RestAPI',
        color: 'text-yellow-500',
      },
    ],
    image: escrow,
    image_blur: escrow_blur,
    width_image: 738,
    height_image: 1600,
    deeplink: 'https://arisstore28.online',
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
    date: 'experience_phincon_traine_fullstack_start_date',
    start_date: 'experience_phincon_traine_fullstack_start_date',
    end_date: 'experience_phincon_traine_fullstack_end_date',
    location: 'Jakarta - Indonesia',
    points: [
      'experience_phincon_traine_fullstack_point_one',
      'experience_phincon_traine_fullstack_point_two',
      'experience_phincon_traine_fullstack_point_three',
    ],
  },
  {
    id: 2,
    title: 'Back End Developer - MyTelkomsel Mobile Application',
    company_name: 'PT. Phincon',
    start_date: 'experience_phincon_fullstack_start_date',
    end_date: 'experience_phincon_fullstack_end_date',
    location: 'Jakarta - Indonesia',
    icon: phincon_logo,
    iconBg: '#383E56',
    date: 'experience_phincon_fullstack_start_date',
    points: [
      'experience_phincon_fullstack_point_one',
      'experience_phincon_fullstack_point_two',
      'experience_phincon_fullstack_point_three',
      'experience_phincon_fullstack_point_four',
      'experience_phincon_fullstack_point_five',
      'experience_phincon_fullstack_point_six',
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
    title: 'nav_link_about_title',
  },
  {
    id: 'work',
    title: 'nav_link_work_title',
  },
  {
    id: 'projects',
    title: 'nav_link_project_title',
  },
  {
    id: 'contact',
    title: 'nav_link_contact_title',
  },
]

export const overviewDescriptionText = 'about_description_html_text'
export const projectDescriptionText = 'project_description_html_text'

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
