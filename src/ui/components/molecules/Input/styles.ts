import styled from 'styled-components'
import T from 'ui/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperLabel = styled.span`
  display: flex;
  margin-bottom: 5px;
`

export const WrapperError = styled.span`
  display: flex;
  width: 100%;
  min-height: 16px;
  margin-top: 8px;
`

export const Input = styled.input<{ error?: string }>`
  display: flex;
  width: 100%;
  font-size: ${T.fonts.sizes.paragraph};
  font-weight: ${T.fonts.weights.regular};
  color: ${({ error }) => (error ? T.colors.error : T.colors.black)};
  height: 39px;
  border-radius: ${T.borderRadius.s};
  padding: 0 14px;
  border: 1px solid ${({ error }) => (error ? T.colors.error : T.colors.black)};
  transition: 0.1s linear;

  &::placeholder {
    color: ${T.colors.grey};
  }

  &:focus,
  &:active {
    border: 1px solid
      ${({ error }) => (error ? T.colors.error : T.colors.black)};
  }
`
