import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Default from '..'

describe('[Template] Default', () => {
  it('should render a Footer com texto', () => {
    renderWithProviders(<Default />)
    const title = screen.getByText(
      '© 2021 Banco CSF S.A. CNPJ 08.357.240/0001-50 Av. Doutor Chucri Zaidan, 296 - 19º andar - Vila Cordeiro, São Paulo - SP, 04.583-110'
    )
    expect(title).toBeInTheDocument()
  })
})
