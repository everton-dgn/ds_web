import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import Input from '..'
import T from 'ui/theme'

describe('[Component] Input', () => {
  const user = userEvent.setup({ delay: null })

  it('should render a snapshot', () => {
    const { container } = renderWithProviders(
      <Input
        name="searchRepositoriesInTheGithub"
        placeholder="Nome de usuário"
        onSetField={jest.fn()}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should the functions onSetField and handleFormat when change text in input', async () => {
    const onSetField = jest.fn()
    renderWithProviders(
      <Input
        name="example"
        placeholder="Nome de usuário"
        onSetField={onSetField}
      />
    )
    const fieldText = screen.getByPlaceholderText('Nome de usuário')
    await user.type(fieldText, 'any_text')
    expect(onSetField).toHaveBeenCalledTimes(8)
  })

  it('should render an error message stylize when the error exists', () => {
    renderWithProviders(
      <Input
        name="example"
        placeholder="Nome de usuário"
        onSetField={jest.fn()}
        error="any_error"
      />
    )
    const errorMessages = screen.getByRole('alert')
    expect(errorMessages).toHaveTextContent('any_error')
    expect(errorMessages).toHaveStyle({
      color: T.colors.error,
      textAlign: 'left',
      justifyContent: 'left',
      lineHeight: '16px',
      fontSize: '12px'
    })
  })

  it('should render a label if passed as prop', () => {
    renderWithProviders(
      <Input
        name="example"
        placeholder="Nome de usuário"
        onSetField={jest.fn()}
        label="any_label"
      />
    )
    const label = screen.getByText('any_label')
    expect(label).toHaveTextContent('label')
  })
})
