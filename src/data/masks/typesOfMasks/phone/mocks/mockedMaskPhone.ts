import { maskPhone } from 'data/masks/typesOfMasks/phone'
import { FormEvent } from 'react'

export const mockedMaskPhone = (value: string) => {
  const event = {
    currentTarget: {
      value
    }
  } as FormEvent<HTMLInputElement>
  return maskPhone(event)
}
