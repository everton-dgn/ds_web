import { mockedMaskCpf } from 'data/masks/typesOfMasks/cpf/mocks/mockedMaskCpf'

describe('[Data] maskCpf', () => {
  it('should return the CPF number with the mask applied', () => {
    const sut = mockedMaskCpf('55825044000')
    expect(sut).toBe('558.250.440-00')
  })
})
