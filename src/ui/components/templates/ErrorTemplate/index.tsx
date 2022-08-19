import * as S from './styles'
import { ErrorProps } from './types'

const ErrorTemplate = ({ children }: ErrorProps) => {
  return <S.Grid>{children}</S.Grid>
}

export default ErrorTemplate
