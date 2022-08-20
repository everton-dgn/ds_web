import { InputHTMLAttributes } from 'react'

export type MaskValueType = 'phone' | 'cpf'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  maskType?: MaskValueType
}
