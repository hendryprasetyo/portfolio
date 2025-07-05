import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { navLinks } from '../constants'
import { FormattedMessage } from 'react-intl'
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary p-[1rem] md:p-[3rem] text-center text[0.9rem] mt-8">
      <a
        href="#"
        className="text-[2rem] font-medium mb-[2rem] inline-block text-secondary"
      >
        HENDRY
      </a>

      <ul className="flex flex-wrap justify-center gap-[2rem]">
        <li>
          <a
            className="text-tertiary hover:text-secondary hover:font-medium transition"
            href="#"
          >
            Home
          </a>
        </li>
        {navLinks.map(nav => (
          <li key={nav.id}>
            <a
              className="text-tertiary hover:text-secondary hover:font-medium transition"
              href={`/portfolio#${nav.id}`}
            >
              <FormattedMessage id={nav.title} />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-[1rem] my-[2rem]">
        <Link
          className="bg-tertiary text-quinary p-[0.8rem] flex rounded-xl hover:border-1 hover:bg-quaternary hover:text-secondary hover:border-secondary transition-all"
          to="mailto:hendryprasetyo13@gmail.com"
          target="_blank"
        >
          <AiOutlineMail />
        </Link>
        <Link
          className="bg-tertiary text-quinary p-[0.8rem] flex rounded-xl hover:border-1 hover:bg-quaternary hover:text-secondary hover:border-secondary transition-all"
          to="http://github.com/hendryprasetyo"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          className="bg-tertiary text-quinary p-[0.8rem] flex rounded-xl border-1 hover:bg-quaternary hover:text-secondary hover:border-secondary transition-all"
          to="https://www.linkedin.com/in/hendrypras"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
      </div>

      <div className="mb-[4rem] text-secondary">
        <small>
          &copy; {currentYear} <FormattedMessage id="footer_text" />
        </small>
      </div>
    </footer>
  )
}

export default Footer
