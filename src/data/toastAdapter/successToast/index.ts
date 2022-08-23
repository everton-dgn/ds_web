import { toast } from 'react-toastify'

export const successToastAdapter = (text: string): void => {
  toast.success(text, { theme: 'colored' })
}
