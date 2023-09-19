import { TTagsProjects } from '../constants'
import { Tilt } from 'react-tilt'
import LazyImage from '../utils/LazyImage'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { AiFillGithub } from 'react-icons/ai'

interface IProjectCard {
  index: number
  name: string
  description: string
  tags: TTagsProjects[]
  image: string
  source_code_link: string
}
// eslint-disable-next-line react-refresh/only-export-components
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: IProjectCard) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-quinary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <LazyImage
            alt="project_image"
            src={image}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <AiFillGithub className="w-1/2 h-1/2 text-white" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-secondary font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-tertiary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag: TTagsProjects) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
export default ProjectCard
