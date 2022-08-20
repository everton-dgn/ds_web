import { validator } from '..'

export const formHomeValidate = (name: string, value: string) => {
  const error: Record<string, string[]> = {
    phone: validator(value).min(11).phone().required().error,
    cpf: validator(value).cpf().required().error,
    email: validator(value).email().required().error
  }
  return error[name]
}
