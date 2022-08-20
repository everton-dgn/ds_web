import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Footer from '..'

describe('[Component] Footer', () => {
  it('should render the heading', () => {
    renderWithProviders(<Footer text="Título de Exemplo" />)
    const h1 = screen.getByRole('heading', { name: 'Título de Exemplo' })
    expect(h1).toBeInTheDocument()
  })
})
