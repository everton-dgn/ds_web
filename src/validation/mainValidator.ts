import { formatNumber } from 'data/formatters'
import {
  maxCharacters,
  minCharacters,
  requiredField,
  validateEmail,
  validateCpf,
  validatePhone
} from './validators'

export const validator = (value: string) => ({
  error: [] as string[],

  required(msg?: string) {
    requiredField(value, this.error, msg)
    return this
  },

  min(number: number, msg?: string) {
    minCharacters(value, this.error, number, formatNumber(value).length, msg)
    return this
  },

  max(number: number, msg?: string) {
    maxCharacters(value, this.error, number, formatNumber(value).length, msg)
    return this
  },

  email(msg?: string) {
    validateEmail(value, this.error, msg)
    return this
  },

  phone(msg?: string) {
    validatePhone(value, this.error, msg)
    return this
  },

  cpf(msg?: string) {
    validateCpf(value, this.error, msg)
    return this
  }
})
