export const validatePhone = (
  value: string,
  error: string[],
  msg?: string
): void => {
  const phone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/
  if (!value.match(phone)) {
    error.push(msg || 'Número inválido')
  }
}
