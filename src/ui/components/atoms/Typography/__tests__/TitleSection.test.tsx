import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Typography from '..'

describe('[Component] TitleSection', () => {
  it('should render the heading', () => {
    renderWithProviders(<Typography title="Título de Exemplo" />)
    const h1 = screen.getByRole('heading', { name: 'Título de Exemplo' })
    expect(h1).toBeInTheDocument()
  })
})
