import { mask } from 'data/mask'
import { FormEvent, forwardRef, memo, useCallback } from 'react'
import * as C from 'ui/components'
import * as S from './styles'
import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', label, error, maskType, onSetField, ...props }, ref) => {
    const handleFormat = useCallback(
      (e: FormEvent<HTMLInputElement>) => {
        mask(maskType, e)
        onSetField(e)
      },
      [maskType, onSetField]
    )

    return (
      <S.Wrapper>
        {label && (
          <S.Label>
            <C.Typography text={label} type="paragraphHighlight" align="left" />
          </S.Label>
        )}
        <S.Input
          ref={ref}
          {...props}
          type={type}
          error={error}
          onChange={handleFormat}
        />
        <S.WrapperError>
          {error && (
            <C.Typography
              text={error}
              type="caption"
              align="left"
              color="error"
              role="alert"
            />
          )}
        </S.WrapperError>
      </S.Wrapper>
    )
  }
)

export default memo(Input)
