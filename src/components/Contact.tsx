/* eslint-disable react-refresh/only-export-components */
import { useRef, useState, ChangeEvent, FormEvent, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import LoadingSpinner from './LoadingSpinner'
import { FormattedMessage, useIntl } from 'react-intl'
const Modal = lazy(() => import('./Modal'))

type FormState = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [modalText, setModalText] = useState('')
  const [modalIcon, setModalIcon] = useState<React.ReactNode | null>(null)
  const intl = useIntl()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_APP_EMAILJS_TO_NAME as string,
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAILJS_TO_EMAIL as string,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false)
          setOpenModal(true)
          setModalText('Your message has been sent. I will reply soon.')
          setModalIcon(<AiOutlineCheckCircle className="text-green-500" />)
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        () => {
          setLoading(false)
          setOpenModal(true)
          setModalText(`An error occurred. Please try again later`)
          setModalIcon(<AiOutlineCloseCircle className="text-red-500" />)
        }
      )
  }

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Modal
          open={openModal}
          icon={modalIcon}
          text={modalText}
          func={() => setOpenModal(false)}
        />
      </Suspense>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-quinary p-8 rounded-2xl"
        >
          <p
            className={
              'sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider'
            }
          >
            <FormattedMessage id="contact_subtitle" />
          </p>
          <h3 className={styles.sectionHeadText}>
            <FormattedMessage id="contact_head_title" />
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">
                <FormattedMessage id="contact_title_form_your_name" />
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={intl.formatMessage({
                  id: 'contact_placeholder_form_your_name',
                })}
                className="bg-quinary py-2 px-4 placeholder:text-tertiary text-tertiary rounded-lg outline-none border-2 border-tertiary font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">
                <FormattedMessage id="contact_title_form_your_email" />
              </span>
              <input
                type="email"
                name="email"
                required
                pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$"
                value={form.email}
                onChange={handleChange}
                placeholder={intl.formatMessage({
                  id: 'contact_placeholder_form_your_email',
                })}
                className="bg-quinary border-2 border-tertiary py-2 px-4 placeholder:text-tertiary text-tertiary rounded-lg outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">
                <FormattedMessage id="contact_title_form_your_message" />
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={intl.formatMessage({
                  id: 'contact_placeholder_form_your_message',
                })}
                className="bg-quinary py-2 px-4 placeholder:text-tertiary text-tertiary rounded-lg outline-none border-2 border-tertiary font-medium"
              />
            </label>

            <button
              disabled={
                loading ||
                !form.name ||
                !form.email ||
                !form.message ||
                !formRef.current?.checkValidity()
              }
              type="submit"
              className="bg-quaternary py-3 px-8 rounded-xl outline-none w-fit text-secondary font-bold shadow-md shadow-primary disabled:bg-quaternary/70 disabled:text-gray-100"
            >
              {loading ? (
                <LoadingSpinner />
              ) : (
                <FormattedMessage id="contact_text_btn_form_submit" />
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')
