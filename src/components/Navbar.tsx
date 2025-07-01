import { Suspense, lazy, useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { styles } from '../styles'
import { navLinks, TNavLinks } from '../constants'
import LoadingSpinner from './LoadingSpinner'
const LazyLogo = lazy(() => import('./LogoNavbar'))
const Navbar = () => {
  const [active, setActive] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-2 lg:py-3 fixed top-0 z-20 ${
        scrolled
          ? 'bg-white/20 backdrop-blur-md shadow-md transition-all duration-300'
          : 'bg-transparent transition-all duration-300'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <LazyLogo />
          </Suspense>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav: TNavLinks) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-secondary' : 'text-secondary/80'
              } hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-secondary text-xl"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-quinary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
