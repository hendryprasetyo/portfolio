import { Tilt } from 'react-tilt'
import LazyImage from '../utils/LazyImage'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { services, TService } from '../constants'

const AboutCard: React.FC = () => (
  <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service: TService, index: number) => {
      return (
        <Tilt className="xs:w-[250px] w-full" key={service.title}>
          <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-[#DDE6ED] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <LazyImage
                alt="web-development"
                src={service.icon}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-[#27374D] text-[20px] font-bold text-center">
                {service.title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      )
    })}
  </div>
)

export default AboutCard
