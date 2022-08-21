import { maskCpf } from 'data/masks/cpf'
import { maskPhone } from './phone'
import { FormEvent } from 'react'
import { MaskValueType } from 'ui/components/molecules/Input/types'

export const mask = (
  maskType: MaskValueType,
  e: FormEvent<HTMLInputElement>
) => {
  e.currentTarget.maxLength = 35
  if (maskType === 'cpf') maskCpf(e)
  if (maskType === 'phone') maskPhone(e)
}
