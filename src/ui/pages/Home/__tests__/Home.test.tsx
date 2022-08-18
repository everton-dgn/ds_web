import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Home from '..'

describe('[Page] Home', () => {
  it('should render a header', async () => {
    renderWithProviders(<Home />)
    const title = screen.getByRole('heading', { name: /hello world!/i })
    expect(title).toBeInTheDocument()
  })

  it('should render an svg', async () => {
    renderWithProviders(<Home />)
    const svg = screen.getByTitle(/arrow pointing up/i)
    expect(svg).toBeInTheDocument()
  })
})
