import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import { createContext, Suspense, useEffect, useState } from 'react'
import LoadingSpinner from './components/LoadingSpinner'
import { IntlProvider } from 'react-intl'
import idMessages from './i18n/id'
import enMessages from './i18n/en'

type LanguageContextType = {
  locale: 'en' | 'id'
  onLanguageChange: (newLocale: 'en' | 'id') => void
}

// Default value
const defaultContext: LanguageContextType = {
  locale: 'en',
  onLanguageChange: () => {},
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext =
  createContext<LanguageContextType>(defaultContext)

const App = () => {
  const [locale, setLocale] = useState<'en' | 'id'>('en')

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as 'en' | 'id' | null
    if (savedLocale === 'en' || savedLocale === 'id') {
      setLocale(savedLocale)
    }
  }, [])

  const onLanguageChange = (newLocale: 'en' | 'id') => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
  }
  const messages = {
    en: enMessages,
    id: idMessages,
  }
  return (
    <LanguageContext.Provider value={{ locale, onLanguageChange }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="en"
        onError={() => {}}
      >
        <Router>
          <Suspense
            fallback={
              <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-white">
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/portfolio" element={<Home />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </IntlProvider>
    </LanguageContext.Provider>
  )
}

export default App
