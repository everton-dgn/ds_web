import { requiredField } from '..'

const makeSut = (value: string, msg?: string) => {
  const error: string[] = []
  requiredField(value, error, msg)
  return error
}

describe('[Validators] requiredField', () => {
  it('should return an array with a custom error message when the "msg" argument exists', () => {
    const sut = makeSut('', 'CustomEvent error!')
    expect(sut).toEqual(['CustomEvent error!'])
  })

  it('should return an array with error message for "value" empty or false', () => {
    const sut = makeSut('')
    expect(sut).toEqual(['Preenchimento obrigatório'])
  })

  it('should return an array empty for values larger than the parameter "minOfCharacters" passed', () => {
    const sut = makeSut('any_value')
    expect(sut).toEqual([])
  })
})
