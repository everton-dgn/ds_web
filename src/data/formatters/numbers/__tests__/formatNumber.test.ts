import { formatNumber } from '..'

describe('[Data] formatNumber', () => {
  it('should return false', () => {
    const sut = formatNumber('(1!2) - 32dfRT/.,][{} ')
    expect(sut).toBe('1232')
  })
})
