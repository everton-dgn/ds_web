import { minCharacters } from '..'

const makeSut = (
  value: string,
  minOfCharacters: number,
  numberOfCharacters: number,
  msg?: string
) => {
  const error: string[] = []
  minCharacters(value, error, minOfCharacters, numberOfCharacters, msg)
  return error
}

describe('[Validators] minCharacters', () => {
  it('should return an array with a custom error message when the "msg" argument exists', () => {
    const sut = makeSut('52', 3, 2, 'CustomEvent error!')
    expect(sut).toEqual(['CustomEvent error!'])
  })

  it('should return an array of error message for values larger than the parameter "minOfCharacters" passed', () => {
    const sut = makeSut('21', 3, 2)
    expect(sut).toEqual(['Mínimo de 3 caracteres'])
  })

  it('should return an array empty for number of characters equal than the parameter "minOfCharacters" passed', () => {
    const sut = makeSut('222', 3, 3)
    expect(sut).toEqual([])
  })

  it('should return an array empty for number of characters smaller than the parameter "minOfCharacters" passed', () => {
    const sut = makeSut('1345', 3, 4)
    expect(sut).toEqual([])
  })
})
