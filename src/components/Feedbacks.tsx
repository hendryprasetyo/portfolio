/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import LazyImage from '../utils/LazyImage'
interface IFeedbackCard {
  index: number
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: IFeedbackCard) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-quinary text-[12px]">
            {designation} {company}
          </p>
        </div>
        <LazyImage
          alt={`feedback_by-${name}`}
          src={image}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-secondary rounded-[20px] w-full`}>
      <div
        className={`bg-quinary rounded-t-2xl rounded-b-[30px] ${styles.padding} md:h-[300px] h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
