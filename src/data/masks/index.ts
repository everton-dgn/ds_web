import { FormEvent } from 'react'
import { maskCpf, maskPhone } from './typesOfMasks'
import { MaskValueType } from 'ui/components/molecules/Input/types'

export const mask = (
  maskType: MaskValueType,
  e: FormEvent<HTMLInputElement>
): string | undefined => {
  if (maskType === 'cpf') return maskCpf(e)
  if (maskType === 'phone') return maskPhone(e)
}
