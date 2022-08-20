import { FormEvent } from 'react'
import { MaskValueType } from 'ui/components/molecules/Input/types'

export const maskPhone = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 15
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')
  e.currentTarget.value = value
}

export const maskCpf = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2')
    e.currentTarget.value = value
  }
}

export const mask = (
  maskType: MaskValueType | undefined,
  e: FormEvent<HTMLInputElement>
) => {
  e.currentTarget.maxLength = 35
  if (maskType === 'cpf') maskCpf(e)
  if (maskType === 'phone') maskPhone(e)
}
