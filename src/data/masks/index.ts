import { maskCpf } from 'data/masks/cpf'
import { maskPhone } from './phone'
import { FormEvent } from 'react'
import { MaskValueType } from 'ui/components/molecules/Input/types'

export const mask = (
  maskType: MaskValueType,
  e: FormEvent<HTMLInputElement>
): string | undefined => {
  e.currentTarget.maxLength = 35
  if (maskType === 'cpf') return maskCpf(e)
  if (maskType === 'phone') return maskPhone(e)
}
