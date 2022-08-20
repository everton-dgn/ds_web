import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Input from '..'

describe('[Component] Input', () => {
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

  it('should render the Input', () => {
    const onSetField = jest.fn()
    renderWithProviders(
      <Input
        name="searchRepositoriesInTheGithub"
        placeholder="Nome de usuário"
        onSetField={onSetField}
      />
    )
    const wrapper = screen.getByRole('textbox')
    expect(wrapper).toBeInTheDocument()
  })
})
