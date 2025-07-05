import { FC } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { getWhatsappLink } from '@/utils'
import { FormattedMessage } from 'react-intl'

type TypeProps = {
  pkg: {
    name: string
    price: string
    price_before_discount: string
    display_discount: string
    note: string
    features: { desription: string; title: string; enable: boolean }[]
  }
  index: number
}
const CardService: FC<TypeProps> = ({ pkg, index }) => {
  const waLink = (message: string) =>
    getWhatsappLink({ to: import.meta.env.VITE_NO_WA, message })
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="max-w-[340px] rounded-2xl p-6 border-2 bg-[#f5f5ff]/70 text-black shadow-lg"
    >
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl xs:text-2xl font-bold">{pkg.name}</h2>
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-xs xs:text-sm font-bold px-3 py-1 rounded-full shadow-lg drop-shadow-md tracking-wide">
          <FormattedMessage id="service_text_discount" /> {pkg.display_discount}
        </span>
      </div>
      <div className="w-full justify-start gap-3 items-center flex my-4">
        {!!pkg.price_before_discount &&
          pkg.price_before_discount !== pkg.price && (
            <span className="font-medium text-xs xs:text-sm line-through">
              {pkg.price_before_discount}
            </span>
          )}
        <span className="text-xl xs:text-2xl font-bold">{pkg.price}</span>
      </div>
      <div className="w-full flex justify-center my-7">
        <Button
          variant="purple-outline"
          className="border-2 font-semibold w-full"
          onClick={() =>
            window.open(
              waLink(
                `Halo, saya tertarik dengan paket ${pkg.name}. Bisa dijelaskan lebih lanjut?`
              ),
              '_blank'
            )
          }
        >
          <FormattedMessage id="service_text_btn_select_package" />
        </Button>
      </div>
      <ul className="space-y-2 mb-4 text-sm font-sans">
        {pkg.features.map((feature, i) => (
          <li
            key={i}
            className="relative flex gap-2 justify-start items-center text-xs xs:text-sm"
          >
            {feature.enable ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              <span className="size-4 text-center font-semibold">-</span>
            )}

            <FormattedMessage id={feature.title} />

            {feature.desription && feature.enable && (
              <div className="relative group">
                <div className="rounded-full w-4 h-4 flex items-center justify-center cursor-pointer hover:bg-purple-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>

                <div className="absolute z-10 top-full mt-1 left-1/2 -translate-x-1/2 px-3 py-2 rounded-md text-xs bg-purple-400 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 min-w-[200px] max-w-[250px] text-left break-words shadow-lg">
                  <FormattedMessage id={feature.desription} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <p className="text-xs mt-2">
        <FormattedMessage id={pkg.note} />
      </p>
    </motion.div>
  )
}

export default CardService
