/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { certification } from '../constants'
import { Tilt } from 'react-tilt'
import LazyImage from '../utils/LazyImage'

type TCertification = {
  image: string
  title: string
}

type CertificateCardProps = {
  index: number
  data: TCertification
}

const CertificateCard: React.FC<CertificateCardProps> = ({ index, data }) => (
  <Tilt className="xs:w-[300px] w-full" key={data.title}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
    >
      <div className="bg-[#DDE6ED] rounded-2xl px-6 sm:px-8 min-h-[320px] flex justify-evenly items-center flex-col">
        <LazyImage
          alt="web-development"
          height={208}
          src={data.image}
          placeholderSrc={data.image}
          width={300}
          titleImage={data.title}
          className="object-contain"
        />
        <h3 className="text-[#27374D] text-[20px] font-bold text-center">
          {data.title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const Cetification = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Certification</p>
        <h2 className={styles.sectionHeadText}>Certification.</h2>
      </motion.div>
      <section className="mt-20 flex flex-wrap gap-10 xl:gap-20">
        {certification.map((certificate, index: number) => (
          <CertificateCard
            key={certificate.title}
            index={index}
            data={certificate}
          />
        ))}
      </section>
    </>
  )
}

export default SectionWrapper(Cetification, 'Certification')
