import { ButtonHTMLAttributes, ReactNode } from 'react'

export type SizeProps = 'medium'

export type ColorProps = 'blue'

export type BtnProps = {
  icon?: ReactNode
  text?: string
  size: SizeProps
  color: ColorProps
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
