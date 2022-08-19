import * as S from './styles'
import * as C from 'ui/components'
import { ReactComponent as Logo } from 'ui/assets/images/logo.svg'

const Home = () => {
  return (
    <S.Container>
      <Logo
        width={166}
        height={52}
        title="Logo Carrefour Soluções Financeiras"
      />

      <C.Typography text="Informe seus dados" type="headline" />

      <S.WrapperInputs>
        <C.Input
          placeholder="(xx) 0000-0000"
          label="Número do celular"
          error={'Error'}
        />
        <C.Input placeholder="000.000.000-00" label="Seu CPF" error={''} />
        <C.Input
          placeholder="email@mail.com"
          label="Seu e-mail"
          error={'Error'}
        />
      </S.WrapperInputs>

      <C.Button text="Próximo" size="medium" color="blue" />
    </S.Container>
  )
}

export default Home
