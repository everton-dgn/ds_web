import { FormEvent } from 'react'

export const maskCpf = (e: FormEvent<HTMLInputElement>): string => {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  e.currentTarget.value = value
  return value
}
