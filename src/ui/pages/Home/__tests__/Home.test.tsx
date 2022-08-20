import { act, screen } from '@testing-library/react'
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

  it('should show an error message for each input with error when filling in incorrect data and clicking the button "Próximo" and when filling in correctly the error message should disappear', async () => {
    renderWithProviders(<Home />)

    const fieldEmail = screen.getByPlaceholderText('email@mail.com')
    const fieldPhone = screen.getByPlaceholderText('(XX) 90000-0000')
    const fieldCpf = screen.getByPlaceholderText('000.000.000-00')
    await user.type(fieldEmail, 'invalid_email')
    await user.type(fieldPhone, '(00) 1111-1111')
    await user.type(fieldCpf, '111.111.111-11')
    await user.click(
      screen.getByRole('button', {
        name: /Avançar para próxima etapa no formulário/i
      })
    )
    const errorMessages = screen.getAllByRole('alert')

    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(errorMessages[0]).toHaveTextContent(/Número inválido/i)
    expect(errorMessages[1]).toHaveTextContent(/CPF inválido/i)
    expect(errorMessages[2]).toHaveTextContent(/E-mail inválido/i)

    await user.type(
      screen.getByPlaceholderText('email@mail.com'),
      'valid_email@mail.com'
    )
    await user.type(
      screen.getByPlaceholderText('(XX) 90000-0000'),
      '(22) 99110-5583'
    )
    await user.type(
      screen.getByPlaceholderText('000.000.000-00'),
      '387.212.729-21'
    )
    await user.click(
      screen.getByRole('button', {
        name: /Avançar para próxima etapa no formulário/i
      })
    )
    act(() => {
      expect(screen.getAllByRole('alert')[0]).toBeInTheDocument()
    })
  })
})
