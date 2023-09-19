/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import AboutCard from './AboutCard'

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
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React, Express.js and Node.js. I am a fast
        learner and collaborate closely with clients to create efficient,
        scalable and user-friendly solutions that solve real-world problems.
        Let's work together to make your idea come true!
      </motion.p>
      <AboutCard />
    </>
  )
}

export default SectionWrapper(About, 'about')
