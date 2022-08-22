import { FormEvent } from 'react'
import { mask } from 'data/masks'
import { MaskValueType } from 'ui/components/molecules/Input/types'

export const makeSut = (
  maskType: MaskValueType,
  value: string,
  maxLength?: number
) => {
  const event = {
    currentTarget: {
      value,
      maxLength
    }
  } as FormEvent<HTMLInputElement>
  return mask(maskType, event)
}
