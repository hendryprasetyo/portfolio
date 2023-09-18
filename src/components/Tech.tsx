/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies, TTechnologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-20">
      {technologies.map((technology: TTechnologies) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h3 className="text-[#27374D] text-[20px] font-bold text-center">
            {technology.name}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')
