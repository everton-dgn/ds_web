export const minCharacters = (
  value: string,
  error: string[],
  number: number,
  numberOfCharacters: number,
  msg?: string
) => {
  if (numberOfCharacters < number) {
    error.push(msg || `Mínimo de ${number} caracteres`)
  }
}
