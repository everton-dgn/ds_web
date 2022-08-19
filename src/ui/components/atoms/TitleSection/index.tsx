import * as S from './styles'
import { TitleProps } from './types'

const TitleSection = ({ title, as }: TitleProps) => (
  <S.TitleSection as={as}>{title}</S.TitleSection>
)

export default TitleSection
