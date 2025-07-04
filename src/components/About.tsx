/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import AboutCard from './AboutCard'
import { overviewDescriptionText, services, TService } from '../constants'
import { FormattedMessage, useIntl } from 'react-intl'

const About = () => {
  const intl = useIntl()
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <FormattedMessage id="about_subtitle" />
        </p>
        <h2 className={styles.sectionHeadText}>
          <FormattedMessage id="about_head_title" />
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: overviewDescriptionText }),
        }}
      />
      <section className="mt-20 flex justify-center sm:justify-start flex-wrap gap-10">
        {services.map((service: TService, index: number) => (
          <AboutCard key={service.title} index={index} data={service} />
        ))}
      </section>
    </>
  )
}

export default SectionWrapper(About, 'about')
