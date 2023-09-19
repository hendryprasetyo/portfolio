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
  }
)

export default FeedbackCard
