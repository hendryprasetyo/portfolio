import { head_image_service } from '@/assets'
import { styles } from '@/styles'
import LazyImage from '@/utils/LazyImage'
import { FormattedMessage } from 'react-intl'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

// Motion variants
const textVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
}

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const HeroService = () => {
  return (
    <section className="flex flex-col gap-2 md:flex-row md:gap-2 lg:gap-5 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full sm:w-8/12 md:w-full lg:w-1/2 flex justify-center"
      >
        <LazyImage
          alt="service-head-logo"
          titleImage="Service Head Logo"
          src={head_image_service}
          placeholderSrc={head_image_service}
          height={400}
          width={400}
          loading="lazy"
        />
      </motion.div>

      {/* Animated text section */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="w-full xs:w-10/12 sm:w-8/12 md:w-full lg:w-1/2 space-y-2 px-2 sm:px-0"
      >
        <motion.h4
          variants={textVariant}
          className="text-lg font-bold sm:text-xl text-center lg:text-start flex flex-col sm:flex-row sm:gap-2"
        >
          <FormattedMessage id="service_subs_title" />
          <span className="text-[#915EFF] font-extrabold">
            <Typewriter
              options={{
                strings: [
                  'Toko Online',
                  'Landing Page',
                  'Bisnis UMKM',
                  'Blog Pribadi',
                  'Website Portofolio',
                  'Website Perusahaan',
                  'Web Sekolah',
                  'Majalah & Portal Berita',
                  'Forum Komunitas',
                  'Website Organisasi',
                  'Website Event',
                  'Website Layanan Jasa',
                  'Website Non-Profit',
                  'Katalog Produk',
                  'Website Kursus Online',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
                delay: 100,
                cursorClassName: 'text-[#915EFF]',
              }}
            />
          </span>
        </motion.h4>

        <motion.h1
          variants={textVariant}
          className={`${styles.sectionHeadText} text-center md:text-start`}
        >
          Siapapun bisa punya <span className="text-[#915EFF]">Website</span>
          &nbsp;dan&nbsp;
          <span className="text-[#915EFF]">Go International</span> 🚀
        </motion.h1>

        <motion.h5
          variants={textVariant}
          className="text-base font-semibold sm:text-lg text-center md:text-start"
        >
          <FormattedMessage id="service_ternary_title" />
        </motion.h5>

        <motion.div
          variants={textVariant}
          className="w-full justify-center items-center flex md:justify-start"
        >
          <a
            href="#pricelist"
            className="px-5 h-9 bg-[#915EFF] text-neutral-50 hover:bg-[#915EFF]/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            <FormattedMessage id="service_btn_order_now" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroService
