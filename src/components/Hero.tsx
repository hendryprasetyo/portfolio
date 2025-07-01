import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { styles } from '../styles'
import Lottie from 'lottie-react'
import HeroAnimationData from '../assets/hero.json'
import HeroRobotHello from '../assets/robot_heloo.json'
import { memo, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import LoadingSpinner from './LoadingSpinner'
const Hero = memo(() => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true)
      const res = await fetch(
        'https://docs.google.com/document/d/1SHPOXGdGGKrVbzM1nLN6cVoPhstP_AS6/export?format=pdf'
      )
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'CV ATS - Hendry Prasetyo.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      alert('Fail Downloaded. Try again please!')
    } finally {
      setIsDownloading(false)
    }
  }
  const sosmed = [
    {
      id: 1,
      href: 'http://github.com/hendryprasetyo',
      icon: FaGithub,
    },
    {
      id: 2,
      href: 'mailto:hendryprasetyo13@gmail.com',
      icon: AiOutlineMail,
    },
    {
      id: 3,
      href: 'https://www.linkedin.com/in/hendrypras',
      icon: BsLinkedin,
    },
  ]

  return (
    <>
      {isDownloading && (
        <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/70">
          <LoadingSpinner />
        </div>
      )}
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[50px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-52 h-36 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-black-200`}>
              Hi, I'm <span className="text-[#915EFF]">Hendry Prasetyo</span>
            </h1>
            <div className={`${styles.heroSubText} mt-2 text-black-100`}>
              <Typewriter
                options={{
                  strings: ['I am a full stack web developer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                  delay: 75,
                  cursorClassName: 'text-[#915EFF]',
                }}
              />
            </div>
            <div className="flex gap-5 mt-5 sm:mt-7 justify-start items-center">
              {sosmed.map((val, index) => {
                return (
                  <motion.div
                    key={val.id}
                    className="w-max"
                    initial={{ scale: 1 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        delay: index * 0.3,
                      },
                    }}
                    whileHover={{ scale: 1 }}
                  >
                    <Link
                      className="w-full text-2xl md:text-3xl text-gray-700"
                      to={val.href}
                      target="_blank"
                    >
                      <val.icon />
                    </Link>
                  </motion.div>
                )
              })}
              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className={`px-4 py-1 border-2 font-semibold rounded-md text-sm sm:text-base transition duration-300 ${
                  isDownloading
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white'
                }`}
              >
                {isDownloading ? 'Downloading...' : 'Download CV'}
              </button>
            </div>
          </div>
          <Lottie
            animationData={HeroRobotHello}
            loop={true}
            className="w-60 h-60 xl:ml-40 lg:block hidden"
          />
        </div>
        <div className="absolute w-full flex justify-center items-center top-[280px] sm:top-[350px] left-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <Lottie
            animationData={HeroAnimationData}
            className="w-[400px] h-[380px] md:w-[550px] md:h-[550px]"
          />
        </div>

        <div className="absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center">
          <a href="#about">
            <span className="sr-only">Go To about</span>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  )
})

export default Hero
