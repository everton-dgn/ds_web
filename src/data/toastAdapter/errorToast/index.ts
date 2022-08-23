import { toast } from 'react-toastify'

export const errorToastAdapter = (error: any): void => {
  toast.error(error.message || error, { theme: 'colored' })
}
