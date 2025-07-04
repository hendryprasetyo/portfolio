/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences, TExperiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import ExperienceCard from './ExperienceCard'
import { VerticalTimeline as RawVerticalTimeline } from 'react-vertical-timeline-component'
import type { FC } from 'react'
import { FormattedMessage } from 'react-intl'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VerticalTimeline = RawVerticalTimeline as unknown as FC<any>
const Experience = () => {
  const sortedExperiences = experiences.sort((a, b) => {
    const dateA = new Date(a.start_date)
    const dateB = new Date(b.start_date)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          <FormattedMessage id="experience_subtitle" />
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          <FormattedMessage id="experience_head_title" />
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#27374D">
          {sortedExperiences.map((experience: TExperiences) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
