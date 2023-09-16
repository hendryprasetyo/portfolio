import { motion, AnimatePresence } from 'framer-motion'
interface IModal {
  open: boolean
  text: string
  func: () => void
  icon: React.ReactNode
}
const Modal = ({ open, text, func, icon }: IModal) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed flex z-50 top-0 left-0 h-screen w-full justify-center items-center bg-gray-100/40 px-5 md:px-0"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="w-[500px] h-max bg-white-100 rounded-xl p-6 shadow-md space-y-5"
          >
            <div className="text-[5rem] justify-center flex items-center">
              {icon}
            </div>
            <h1 className="text-black-100 text-lg text-center">{text}</h1>
            <div className="text-end">
              <button
                onClick={func}
                className="text-white-100 bg-tertiary px-3 rounded-md py-1.5 hover:bg-quaternary font-medium"
              >
                Oke
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
