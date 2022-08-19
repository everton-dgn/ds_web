import * as S from './styles'
import * as C from 'ui/components'
import { ReactComponent as IconArrowUp } from 'ui/assets/icons/arrow_up.svg'

const Home = () => {
  return (
    <S.Container>
      <C.TitleSection title="Hello World!" />

      <br />

      <IconArrowUp width={50} height={50} title="Arrow pointing up" />
    </S.Container>
  )
}

export default Home
