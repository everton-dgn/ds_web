export const maxCharacters = (
  value: string,
  error: string[],
  maxOfCharacters: number,
  numberOfCharacters: number,
  msg?: string
): void => {
  if (numberOfCharacters > maxOfCharacters) {
    error.push(msg || `Máximo de ${maxOfCharacters} caracteres`)
  }
}
