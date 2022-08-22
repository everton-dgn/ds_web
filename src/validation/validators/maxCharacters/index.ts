export const maxCharacters = (
  value: string,
  error: string[],
  maxOfCharacters: number,
  numberOfCharacters: number,
  msg?: string
) => {
  if (numberOfCharacters > maxOfCharacters) {
    error.push(msg || `Máximo de ${maxOfCharacters} caracteres`)
  }
}
