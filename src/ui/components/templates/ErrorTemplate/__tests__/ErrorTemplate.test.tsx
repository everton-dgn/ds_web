import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Error from '..'

describe('[Template] Error', () => {
  it('should render a children', () => {
    renderWithProviders(
      <Error>
        <p data-testid="select_template">Test Template</p>
      </Error>
    )
    expect(screen.getByTestId('select_template')).toBeInTheDocument()
  })
})
