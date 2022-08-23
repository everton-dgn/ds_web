import { BrowserRouter } from 'react-router-dom'
import Routes from 'main/routes'
import { MainProviders } from 'ui/providers'
import * as C from 'ui/components'

const App = () => (
  <MainProviders>
    <BrowserRouter>
      <Routes />
      <C.Toast />
    </BrowserRouter>
  </MainProviders>
)

export default App
