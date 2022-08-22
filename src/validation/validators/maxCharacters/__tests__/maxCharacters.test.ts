import { maxCharacters } from '..'

const makeSut = (
  value: string,
  maxOfCharacters: number,
  numberOfCharacters: number,
  msg?: string
) => {
  const error: string[] = []
  maxCharacters(value, error, maxOfCharacters, numberOfCharacters, msg)
  return error
}

describe('[Validators] maxCharacters', () => {
  it('should return an array with a custom error message when the "msg" argument exists', () => {
    const sut = makeSut('523', 2, 3, 'CustomEvent error!')
    expect(sut).toEqual(['CustomEvent error!'])
  })

  it('should return an array of error message for values larger than the parameter "maxOfCharacters" passed', () => {
    const sut = makeSut('523', 2, 3)
    expect(sut).toEqual(['Máximo de 2 caracteres'])
  })

  it('should return an array empty for number of characters equal than the parameter "maxOfCharacters" passed', () => {
    const sut = makeSut('22', 2, 2)
    expect(sut).toEqual([])
  })

  it('should return an array empty for number of characters smaller than the parameter "maxOfCharacters" passed', () => {
    const sut = makeSut('1', 2, 1)
    expect(sut).toEqual([])
  })
})
