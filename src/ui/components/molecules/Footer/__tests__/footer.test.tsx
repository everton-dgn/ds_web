import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Footer from '..'

describe('[Component] Footer', () => {
  it('should render um Footer with text inside', () => {
    renderWithProviders(<Footer text="Text of Example in Footer" />)
    const text = screen.getByText('Text of Example in Footer')
    expect(text).toBeInTheDocument()
  })
})
