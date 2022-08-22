export const requiredField = (
  value: string,
  error: string[],
  msg?: string
): void => {
  if (!value) {
    error.push(msg || 'Preenchimento obrigatório')
  }
}
