export const maxCharacters = (
  value: string,
  error: string[],
  number: number,
  numberOfCharacters: number,
  msg?: string
) => {
  if (numberOfCharacters > number) {
    error.push(msg || `Máximo de ${number} caracteres`)
  }
}
