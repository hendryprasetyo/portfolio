import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { TExperiences } from '../constants'
import { memo } from 'react'
const ExperienceCard = memo(({ experience }: { experience: TExperiences }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#DDE6ED',
        color: '#27374D',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #526D82' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            alt={experience.company_name}
            src={experience.icon}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-secondary text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map(point => (
          <li
            key={point.length}
            className="text-secondary-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
})

export default ExperienceCard
