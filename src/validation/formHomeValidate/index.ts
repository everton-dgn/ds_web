import { validator } from '../mainValidator'

export const formHomeValidate = (name: string, value: string): string[] => {
  const error: Record<string, string[]> = {
    phone: validator(value).required().min(11).phone().error,
    cpf: validator(value).required().min(11).cpf().error,
    email: validator(value).required().email().error
  }
  return error[name]
}
