import { validateEmail } from '..'

const makeSut = (value: string, msg?: string) => {
  const error: string[] = []
  validateEmail(value, error, msg)
  return error
}

describe('[Validators] validateEmail', () => {
  it('should return an array with a custom error message when the "msg" argument exists', () => {
    const sut = makeSut('', 'CustomEvent error!')
    expect(sut).toEqual(['CustomEvent error!'])
  })

  it('should return an array with error message for invalid email', () => {
    expect(makeSut('invalid_email@mail')).toEqual(['E-mail inválido'])
    expect(makeSut('invalid_email@')).toEqual(['E-mail inválido'])
    expect(makeSut('@mail.com')).toEqual(['E-mail inválido'])
    expect(makeSut('invalid_email.com')).toEqual(['E-mail inválido'])
  })

  it('should return an array empty for values valid email', () => {
    const sut = makeSut('invalid_email@mail.com')
    expect(sut).toEqual([])
  })
})
