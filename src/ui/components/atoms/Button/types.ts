import { ButtonHTMLAttributes } from 'react'

export type SizeProps = 'medium'

export type ColorProps = 'blue'

export type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  size: SizeProps
  color: ColorProps
  fullWidth?: boolean
}
