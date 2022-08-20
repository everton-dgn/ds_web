import { formHomeValidate } from '..'

describe('[Validation] formHomeValidate', () => {
  it('should return an array of error message for values false when calling "formHomeValidate" method when send "phone" as parameter and a phone number falsy', () => {
    const sut = (name: string, value: string) => formHomeValidate(name, value)
    expect(sut('phone', '(00) 99123-8909')).toEqual(['Número inválido'])
    expect(sut('phone', '(77) 99123-8909')).toEqual([])
  })
})
