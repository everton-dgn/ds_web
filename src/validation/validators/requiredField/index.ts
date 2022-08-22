export const requiredField = (value: string, error: string[], msg?: string) => {
  if (!value) {
    error.push(msg || 'Preenchimento obrigatório')
  }
}
