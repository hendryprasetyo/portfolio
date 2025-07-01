import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { TService } from '../constants'
import LazyImage from '../utils/LazyImage'

type AboutCardProps = {
  index: number
  data: TService
}

const AboutCard: React.FC<AboutCardProps> = ({ index, data }) => (
  <Tilt className="xs:w-[250px] w-full" key={data.title}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-[#DDE6ED] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <LazyImage
          alt="web-development"
          height={208}
          src={data.icon}
          placeholderSrc={data.icon}
          width={208}
          titleImage={data.title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-[#27374D] text-[20px] font-bold text-center">
          {data.title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

export default AboutCard
