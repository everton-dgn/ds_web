import { validator } from '..'

export const formHomeValidate = (name: string, value: string) => {
  const error: Record<string, string[]> = {
    phone: validator(value).required().min(11).phone().error,
    cpf: validator(value).required().cpf().error,
    email: validator(value).required().email().error
  }
  return error[name]
}
