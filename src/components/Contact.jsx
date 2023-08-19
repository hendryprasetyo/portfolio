import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import Modal from './Modal'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [modalText, setModalText] = useState('')
  const [modalIcon, setModalIcon] = useState(null)

  const handleChange = e => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
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
        error => {
          setLoading(false)
          setOpenModal(true)
          setModalText('An error occurred. Please try again later.')
          setModalIcon(<AiOutlineCloseCircle className="text-red-500" />)
        }
      )
  }

  return (
    <>
      <Modal
        open={openModal}
        icon={modalIcon}
        text={modalText}
        func={() => setOpenModal(false)}
      />
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
            Get in touch
          </p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-quinary py-4 px-6 placeholder:text-tertiary text-tertiary rounded-lg outline-none border-2 border-tertiary font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-quinary border-2 border-tertiary py-4 px-6 placeholder:text-tertiary text-tertiary rounded-lg outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-quinary py-4 px-6 placeholder:text-tertiary text-tertiary rounded-lg outline-none border-2 border-tertiary font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-quaternary py-3 px-8 rounded-xl outline-none w-fit text-secondary font-bold shadow-md shadow-primary"
            >
              {loading ? 'Sending...' : 'Send'}
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
