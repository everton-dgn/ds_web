import { formatNumber } from 'data/formatters'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let isValid = true
const numberOfCharacters = (value: string): number => formatNumber(value).length

const requiredField = (value: string, error: string[], msg?: string) => {
  if (!value) {
    isValid = false
    error.push(msg || 'Preenchimento obrigatório')
  }
}

const minCharacters = (
  value: string,
  error: string[],
  number: number,
  msg?: string
) => {
  if (numberOfCharacters(value) < number) {
    isValid = false
    error.push(msg || `Mínimo de ${number} caracteres`)
  }
}

const maxCharacters = (
  value: string,
  error: string[],
  number: number,
  msg?: string
) => {
  if (numberOfCharacters(value) > number) {
    isValid = false
    error.push(msg || `Máximo de ${number} caracteres`)
  }
}

const validateEmail = (value: string, error: string[], msg?: string) => {
  const email =
    // eslint-disable-next-line no-control-regex
    /^((([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
  if (!value.match(email)) {
    isValid = false
    error.push(msg || 'E-mail inválido')
  }
}

const validatePhone = (value: string, error: string[], msg?: string) => {
  const phone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/
  if (!value.match(phone)) {
    isValid = false
    error.push(msg || 'Número inválido')
  }
}

const validateCpf = (value: string, error: string[], msg?: string) => {
  const isValidCpf = () => {
    const cpf = formatNumber(value)
    const isAllNumberRepeat = !Array.from(cpf).filter(e => e !== cpf[0]).length
    if (cpf.length !== 11 || isAllNumberRepeat) return false
    let soma = 0
    let resto
    for (let i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    if (resto !== parseInt(cpf.substring(9, 10))) return false
    soma = 0
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    if (resto !== parseInt(cpf.substring(10, 11))) return false
    return true
  }
  if (!isValidCpf()) {
    isValid = false
    error.push(msg || 'CPF inválido')
  }
}

export const validator = (value: string) => ({
  error: [] as string[],

  required(msg?: string) {
    requiredField(value, this.error, msg)
    return this
  },

  min(number: number, msg?: string) {
    minCharacters(value, this.error, number, msg)
    return this
  },

  max(number: number, msg?: string) {
    maxCharacters(value, this.error, number, msg)
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
