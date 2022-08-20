import * as S from './styles'
import { TypographyProps } from './types'

const Typography = ({
  text,
  align = 'center',
  type,
  color = 'black',
  ...props
}: TypographyProps) => {
  const as = type === 'headline' ? 'h1' : 'p'

  return (
    <S.Text as={as} align={align} type={type} color={color} {...props}>
      {text}
    </S.Text>
  )
}

export default Typography
