import { Outlet } from 'react-router-dom'
import * as S from './styles'
import * as C from 'ui/components'

const DefaultTemplate = () => {
  return (
    <S.Grid>
      <S.WrapperPage>
        <Outlet />
      </S.WrapperPage>
      <C.Footer text="© 2021 Banco CSF S.A. CNPJ 08.357.240/0001-50 Av. Doutor Chucri Zaidan, 296 - 19º andar - Vila Cordeiro, São Paulo - SP, 04.583-110" />
    </S.Grid>
  )
}

export default DefaultTemplate
