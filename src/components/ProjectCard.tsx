import { TProjects, TTagsProjects, projects } from '../constants'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai'
import React from 'react'
import LazyImage from '../utils/LazyImage'
import { FormattedMessage } from 'react-intl'

// eslint-disable-next-line react-refresh/only-export-components
const ProjectCard = () => {
  return projects.map((project: TProjects, index) => (
    <React.Fragment key={project.id}>
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-quinary p-3.5 sm:p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-full">
            <LazyImage
              placeholderSrc={project.image_blur}
              titleImage={project.name}
              alt={project.name}
              src={project.image}
              height={project.height_image}
              width={project.width_image}
              className="w-full h-full object-cover object-top rounded-2xl"
            />

            <div className="absolute gap-2 inset-0 flex justify-end m-3 card-img_hover">
              {project.source_code_link ? (
                <button
                  type="button"
                  onClick={() =>
                    window.open(project.source_code_link, '_blank')
                  }
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <AiFillGithub className="w-1/2 h-1/2 text-white" />
                </button>
              ) : null}
              {project.deeplink ? (
                <button
                  type="button"
                  onClick={() => window.open(project.deeplink, '_blank')}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <AiOutlineArrowRight className="w-1/2 h-1/2 text-white" />
                </button>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-secondary font-bold text-[24px]">
              {project.name}
            </h3>
            <p className="mt-2 text-tertiary text-[14px]">
              <FormattedMessage id={project.description} />
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map((tag: TTagsProjects) => (
              <p
                key={`${project.name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </React.Fragment>
  ))
}
export default ProjectCard
