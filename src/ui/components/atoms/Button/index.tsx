import { forwardRef, memo } from 'react'
import * as S from './styles'
import { BtnProps } from './types'

const Button = forwardRef<HTMLButtonElement, BtnProps>(
  ({ text, ...props }, ref) => (
    <S.Container {...props} ref={ref}>
      {text}
    </S.Container>
  )
)

export default memo(Button)
