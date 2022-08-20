import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import Home from '..'

describe('[Page] Home', () => {
  afterEach(() => jest.clearAllMocks())
  const user = userEvent.setup({ delay: null })

  it('should render an svg', () => {
    renderWithProviders(<Home />)
    const svg = screen.getByTitle(/Logo Carrefour Soluções Financeiras/i)
    expect(svg).toBeInTheDocument()
  })

  it('Should start disabled the button "Próximo" and should enable it only when the phone field, CPF field and the email field are filled in', async () => {
    renderWithProviders(<Home />)

    const btnDisabled = screen.getByRole('button', {
      name: /Avançar para próxima etapa no formulário/i
    })

    expect(btnDisabled).toBeDisabled()

    const fieldEmail = screen.getByPlaceholderText('email@mail.com')
    await user.type(fieldEmail, 'valid_email@email.com')

    expect(
      screen.getByRole('button', {
        name: /Avançar para próxima etapa no formulário/i
      })
    ).toBeDisabled()

    const fieldPhone = screen.getByPlaceholderText('(XX) 90000-0000')
    const fieldCpf = screen.getByPlaceholderText('000.000.000-00')
    await user.type(fieldPhone, '(22) 99110-5583')
    await user.type(fieldCpf, '387.212.729-21')

    expect(
      screen.getByRole('button', {
        name: /Avançar para próxima etapa no formulário/i
      })
    ).toBeEnabled()

    await user.clear(fieldCpf)

    expect(
      screen.getByRole('button', {
        name: /Avançar para próxima etapa no formulário/i
      })
    ).toBeDisabled()
  })
})
