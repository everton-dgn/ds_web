import { validateCpf } from '..'

const makeSut = (value: string, msg?: string) => {
  const error: string[] = []
  validateCpf(value, error, msg)
  return error
}

describe('[Validators] validateCpf', () => {
  it('should return an array with a custom error message when the "msg" argument exists', () => {
    const sut = makeSut('', 'CustomEvent error!')
    expect(sut).toEqual(['CustomEvent error!'])
  })

  it('should return an array with error message for "value" containing less than 11 digits', () => {
    const sut = makeSut('695.093.720-2')
    expect(sut).toEqual(['CPF inválido'])
  })

  it('should return an array with error message for "value" containing invalid cpf', () => {
    const sut = makeSut('000.093.000-22')
    expect(sut).toEqual(['CPF inválido'])
  })

  it('should return an array empty for values valid cpf', () => {
    const sut = makeSut('695.093.720-21')
    expect(sut).toEqual([])
  })
})
