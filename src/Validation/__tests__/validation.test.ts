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
})
