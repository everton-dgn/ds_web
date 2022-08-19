import * as S from './styles'
import * as C from 'ui/components'
import { FooterProps } from './types'

const Footer = ({ text }: FooterProps) => (
  <S.Wrapper>
    <C.Typography text={text} type="caption" />
  </S.Wrapper>
)

export default Footer
