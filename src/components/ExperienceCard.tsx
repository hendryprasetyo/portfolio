import { VerticalTimelineElement as RawVerticalTimelineElement } from 'react-vertical-timeline-component'
import type { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VerticalTimelineElement = RawVerticalTimelineElement as unknown as FC<any>

import { TExperiences } from '../constants'
import { memo } from 'react'
import LazyImage from '../utils/LazyImage'
const ExperienceCard = memo(({ experience }: { experience: TExperiences }) => {
  const experianceDate =
    experience.start_date === experience.end_date
      ? experience.start_date
      : `${experience.start_date} - ${experience.end_date}`
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#DDE6ED',
        color: '#27374D',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #526D82' }}
      date={experianceDate}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full border">
          <LazyImage
            alt={experience.company_name}
            titleImage={experience.company_name}
            src={experience.icon}
            placeholderSrc={experience.icon}
            height={400}
            width={400}
            className="w-full h-full object-contain"
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
          {experience.company_name}, {experience.location}
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
