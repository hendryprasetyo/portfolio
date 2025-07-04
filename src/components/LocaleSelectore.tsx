import { useContext, useTransition } from 'react'
import { en_flag, id_flag } from '../assets'
import { LanguageContext } from '../App'

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition()
  const { locale, onLanguageChange } = useContext(LanguageContext)

  const handleChange = (localeSelected: 'id' | 'en') => {
    startTransition(() => {
      onLanguageChange(localeSelected)
    })
  }

  return (
    <button
      className="justify-center flex min-w-max items-center gap-1 rounded-full sm:bg-neutral-100 sm:pr-2"
      disabled={isPending}
      onClick={() => handleChange(locale === 'en' ? 'id' : 'en')}
    >
      <img
        alt="language icon"
        title="Flag"
        src={locale === 'id' ? id_flag : en_flag}
        className="size-6 rounded-full"
        width={24}
        height={24}
      />
      <span className="hidden text-sm sm:block font-bold text-center">
        {locale.toUpperCase()}
      </span>
    </button>
  )
}

export default LocaleSwitcher
