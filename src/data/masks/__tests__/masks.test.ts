import { makeSut } from 'data/masks/mocks/mockedMask'

describe('[Data] Masks', () => {
  it('should return masked phone number', () => {
    const sut = makeSut('phone', '75991213488')
    expect(sut).toBe('(75) 99121-3488')
  })

  it('should return masked CPF number', () => {
    const sut = makeSut('cpf', '55825044000')
    expect(sut).toBe('558.250.440-00')
  })
})
