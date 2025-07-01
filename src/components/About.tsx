/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import AboutCard from './AboutCard'
import { overviewDescriptionText, services, TService } from '../constants'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        dangerouslySetInnerHTML={{ __html: overviewDescriptionText }}
      />
      <section className="mt-20 flex flex-wrap gap-10">
        {services.map((service: TService, index: number) => (
          <AboutCard key={service.title} index={index} data={service} />
        ))}
      </section>
    </>
  )
}

export default SectionWrapper(About, 'about')
