import { maskCpf } from 'data/masks/typesOfMasks/cpf'
import { FormEvent } from 'react'

export const mockedMaskCpf = (value: string): string => {
  const event = {
    currentTarget: {
      value
    }
  } as FormEvent<HTMLInputElement>
  return maskCpf(event)
}
