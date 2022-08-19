import { forwardRef, memo } from 'react'
import * as S from './styles'
import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', ...props }, ref) => (
    <S.Input ref={ref} {...props} type={type} />
  )
)

export default memo(Input)
