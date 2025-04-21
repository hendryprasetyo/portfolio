/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'
import { projectDescriptionText } from '../constants'

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-tertiary`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-secondary`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-tertiary text-[17px] max-w-3xl leading-[30px]"
          dangerouslySetInnerHTML={{ __html: projectDescriptionText }}
        />
      </div>

      <div className="mt-20 flex flex-wrap sm:justify-around gap-7 xl:justify-start">
        <ProjectCard />
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'projects')
