import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import Button from '..'

describe('[Component] Button', () => {
  const user = userEvent.setup({ delay: null })

  it('should renderizar um snapshot', () => {
    const { container } = renderWithProviders(
      <Button text="Mais Informações" color="blue" size="medium" />
    )
    expect(container).toMatchSnapshot()
  })

  it('should call a function once on click on the button', async () => {
    const onClick = jest.fn()
    renderWithProviders(
      <Button
        onClick={onClick}
        text="Mais Informações"
        color="blue"
        size="medium"
      />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    await user.click(btn)

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render a disabled Button', () => {
    renderWithProviders(
      <Button disabled text="Mais Informações" color="blue" size="medium" />
    )
    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      cursor: 'not-allowed',
      opacity: 0.5
    })
    expect(btn).toBeDisabled()
  })

  it('should render a Button with full width', () => {
    renderWithProviders(
      <Button
        disabled
        text="Mais Informações"
        color="blue"
        fullWidth={true}
        size="medium"
      />
    )
    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({ width: '100%' })
  })
})
