import { validator } from '..'

describe('[Validation] validator', () => {
  it('should return an array of error message for values false when calling require method', () => {
    const sut = validator('').required().error
    expect(sut).toEqual(['Preenchimento obrigatório'])
  })
})
