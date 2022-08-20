import { validator } from '..'

describe('[Validation] validator', () => {
  it('should return an array of error message for values false when calling "require" method', () => {
    const sut = validator('').required().error
    expect(sut).toEqual(['Preenchimento obrigatório'])
  })

  it('should return an array of error message for values less than the parameter passed to the "min" method when called', () => {
    const sut = (value: string) => validator(value).min(8).error
    expect(sut('5')).toEqual(['Mínimo de 8 caracteres'])
    expect(sut('8')).toEqual([])
    expect(sut('10')).toEqual([])
  })

  it('should return an array of error message for values larger than the parameter passed to the "max" method when called', () => {
    const sut = (value: string) => validator(value).max(2).error
    expect(sut('5')).toEqual(['Máximo de 2 caracteres'])
    expect(sut('2')).toEqual([])
    expect(sut('1')).toEqual([])
  })

  it('should return an array of error message for emails in incorrect format when calling the method "email"', () => {
    const sut = (email: string) => validator(email).email().error
    expect(sut('invalid_email')).toEqual(['E-mail inválido'])
    expect(sut('invalid_email@mail')).toEqual(['E-mail inválido'])
    expect(sut('valid_email@mail.com')).toEqual([])
  })

  it('should return an array of error message for values invalid phone numbers when calling method "phone"', () => {
    const sut = (phone: string) => validator(phone).phone().error
    expect(sut('(00) 99123-8909')).toEqual(['Número inválido'])
    expect(sut('(77) 99999-999')).toEqual(['Número inválido'])
    expect(sut('')).toEqual(['Número inválido'])
    expect(sut('(77) 99999-9999')).toEqual([])
    expect(sut('(77) 99123-8909')).toEqual([])
    expect(sut('(77) 98776-9000')).toEqual([])
  })

  it('should return an array of error message for values invalid CPF numbers when calling method "cpf"', () => {
    const sut = (cpf: string) => validator(cpf).cpf().error
    expect(sut('001.815.650-64')).toEqual(['CPF inválido'])
    expect(sut('000.000.000-00')).toEqual(['CPF inválido'])
    expect(sut('444.444.444-44')).toEqual(['CPF inválido'])
    expect(sut('444.222.222-22')).toEqual(['CPF inválido'])
    expect(sut('801.815.650-6')).toEqual(['CPF inválido'])
    expect(sut('')).toEqual(['CPF inválido'])
    expect(sut('801.815.650-64')).toEqual([])
    expect(sut('558.250.440-00')).toEqual([])
  })
})
