/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import FeedbackCard from './FeedbackCard'
import { FormattedMessage } from 'react-intl'

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-secondary rounded-[20px] w-full`}>
      <div
        className={`bg-quinary rounded-t-2xl rounded-b-[30px] ${styles.padding} md:h-[300px] h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            <FormattedMessage id="testimonial_subtitle" />
          </p>
          <h2 className={styles.sectionHeadText}>
            <FormattedMessage id="testimonial_head_title" />
          </h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            data={testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
