import { validatePhone } from '..'

const makeSut = (value: string, msg?: string) => {
  const error: string[] = []
  validatePhone(value, error, msg)
  return error
}

describe('[Validators] validatePhone', () => {
  it('should return an array with a custom error message when the "msg" argument exists', () => {
    const sut = makeSut('', 'CustomEvent error!')
    expect(sut).toEqual(['CustomEvent error!'])
  })

  it('should return an array with error message for invalid phone', () => {
    expect(makeSut('(38) 00000-0000')).toEqual(['Número inválido'])
    expect(makeSut('(38) 00000')).toEqual(['Número inválido'])
    expect(makeSut('(00) 99233-3445')).toEqual(['Número inválido'])
  })

  it('should return an array empty for values valid phone', () => {
    const sut = makeSut('(38) 99233-3445')
    expect(sut).toEqual([])
  })
})
