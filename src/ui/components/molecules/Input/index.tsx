import { forwardRef, memo } from 'react'
import * as C from 'ui/components'
import * as S from './styles'
import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', label, error, ...props }, ref) => (
    <S.Wrapper>
      {label && (
        <S.WrapperLabel>
          <C.Typography text={label} type="paragraphHighlight" align="left" />
        </S.WrapperLabel>
      )}
      <S.Input ref={ref} {...props} type={type} error={error} />
      <S.WrapperError>
        {error && (
          <C.Typography
            text={error}
            type="caption"
            align="left"
            color="error"
          />
        )}
      </S.WrapperError>
    </S.Wrapper>
  )
)

export default memo(Input)
