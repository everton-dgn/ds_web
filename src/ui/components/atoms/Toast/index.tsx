import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

if (typeof window !== 'undefined') injectStyle()

const Toast = () => {
  return <ToastContainer />
}

export default Toast
