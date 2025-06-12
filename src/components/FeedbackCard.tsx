import { memo } from 'react'
import LazyImage from '../utils/LazyImage'
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'

interface IFeedbackCard {
  index: number
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}
const FeedbackCard = memo(
  ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
  }: IFeedbackCard) => {
    return (
      <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className="bg-tertiary px-7 py-8 rounded-3xl xs:w-[320px] w-full"
      >
        <blockquote className="text-white text-[18px] flex flex-col">
          <span className="text-[48px] font-black text-white leading-none">
            “
          </span>
          <span className="tracking-wider">{testimonial}</span>
        </blockquote>
        <figcaption className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-quinary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <LazyImage
            alt={`feedback_by-${name}`}
            src={image}
            className="w-10 h-10 rounded-full object-cover"
          />
        </figcaption>
      </motion.div>
    )
  }
)

export default FeedbackCard
