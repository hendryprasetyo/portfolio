import { useContext, useEffect } from 'react'
import { LanguageContext } from '../../App'
import PriceList from '@/components/service/PriceList'
import WhatsAppFloatingButton from '@/components/service/WhatsAppFloatingButton'
import HeroService from '@/components/service/HeroService'
import { Helmet } from 'react-helmet-async'
import { useIntl } from 'react-intl'

const ServicePage = () => {
  const intl = useIntl()
  const { onLanguageChange } = useContext(LanguageContext)
  useEffect(() => {
    onLanguageChange('id')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: 'service_title_meta' })}</title>
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_URL}/services${
            window.location.search
          }`}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={intl.formatMessage({ id: 'service_title_meta' })}
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          property="og:url"
          content={`${import.meta.env.VITE_BASE_URL}/services${
            window.location.search
          }`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={intl.formatMessage({ id: 'service_title_meta' })}
        />
        <meta
          name="twitter:url"
          content={`${import.meta.env.VITE_BASE_URL}/services${
            window.location.search
          }`}
        />
        <meta
          name="twitter:image"
          content={`${import.meta.env.VITE_BASE_URL}/og-image.jpg`}
        />
      </Helmet>
      <div className="sm:mt-20">
        <HeroService />
        <PriceList />
        <WhatsAppFloatingButton
          message="Hallo"
          phoneNumber={import.meta.env.VITE_NO_WA}
        />
      </div>
    </>
  )
}

export default ServicePage
