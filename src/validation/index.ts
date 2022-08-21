export const validator = (value: string) => ({
  isValid: true,
  error: [] as string[],

  required(msg?: string) {
    if (!value) {
      this.isValid = false
      this.error.push(msg || 'Preenchimento obrigatório')
    }
    return this
  },

  min(number: number, msg?: string) {
    if (Number(value) < number) {
      this.isValid = false
      this.error.push(msg || `Mínimo de ${number} caracteres`)
    }
    return this
  },

  max(number: number, msg?: string) {
    if (Number(value) > number) {
      this.isValid = false
      this.error.push(msg || `Máximo de ${number} caracteres`)
    }
    return this
  },

  email(msg?: string) {
    const email =
      // eslint-disable-next-line no-control-regex
      /^((([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    if (!value.match(email)) {
      this.isValid = false
      this.error.push(msg || 'E-mail inválido')
    }
    return this
  },

  phone(msg?: string) {
    const phone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/
    if (!value.match(phone)) {
      this.isValid = false
      this.error.push(msg || 'Número inválido')
    }
    return this
  },

  cpf(msg?: string) {
    const isValidCpf = () => {
      const cpf = () => value.replace(/[^\d]+/g, '')
      const isAllNumberRepeat = !Array.from(cpf()).filter(e => e !== cpf()[0])
        .length
      if (cpf().length !== 11 || isAllNumberRepeat) return false
      let soma = 0
      let resto
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf().substring(i - 1, i)) * (11 - i)
      resto = (soma * 10) % 11
      if (resto === 10 || resto === 11) resto = 0
      if (resto !== parseInt(cpf().substring(9, 10))) return false
      soma = 0
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf().substring(i - 1, i)) * (12 - i)
      resto = (soma * 10) % 11
      if (resto === 10 || resto === 11) resto = 0
      if (resto !== parseInt(cpf().substring(10, 11))) return false
      return true
    }
    if (!isValidCpf()) {
      this.isValid = false
      this.error.push(msg || 'CPF inválido')
    }
    return this
  }
})
