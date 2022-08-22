import { mockedMaskPhone } from 'data/masks/typesOfMasks/phone/mocks/mockedMaskPhone'

describe('[Data] maskPhone', () => {
  it('should return the phone number with the mask applied', () => {
    const sut = mockedMaskPhone('75991213488')
    expect(sut).toBe('(75) 99121-3488')
  })
})
