/* eslint-disable react-refresh/only-export-components */
import { offers } from '@/constants'
import CardService from './CardService'
import { SectionWrapper } from '@/hoc'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import { FormattedMessage } from 'react-intl'

const PriceList = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center space-y-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          <FormattedMessage id="service_price_list_head_title" />
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-medium">
          <FormattedMessage id="service_price_list_sub_title" />
        </p>
      </motion.div>
      <div className="mt-20 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 lg:gap-8 justify-items-center">
        {offers.map((pkg, index) => (
          <CardService key={pkg.name} index={index} pkg={pkg} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(PriceList, 'pricelist')
