import { formHomeValidate } from '..'

describe('[Validation] formHomeValidate', () => {
  it('should return an array of error message for values false when calling "formHomeValidate" method when send "phone" as parameter and a phone number falsy', () => {
    const sut = (name: string, value: string) => formHomeValidate(name, value)
    expect(sut('phone', '(00) 99123-8909')).toEqual(['Número inválido'])
    expect(sut('phone', '(77) 99123-8909')).toEqual([])
  })

  it('should return an array of error message for values false when calling "formHomeValidate" method when send "cpf" as parameter and a CPF number falsy', () => {
    const sut = (name: string, value: string) => formHomeValidate(name, value)
    expect(sut('cpf', '000.000.000-00')).toEqual(['CPF inválido'])
    expect(sut('cpf', '558.250.440-00')).toEqual([])
  })

  it('should return an array of error message for values false when calling "formHomeValidate" method when send "email" as parameter and a invalid email', () => {
    const sut = (name: string, value: string) => formHomeValidate(name, value)
    expect(sut('email', 'invalid_email')).toEqual(['E-mail inválido'])
    expect(sut('email', 'valid_email@mail.com')).toEqual([])
  })
})
