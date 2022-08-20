import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Typography from '..'
import T from 'ui/theme'

describe('[Component] Typography', () => {
  it('should render a snapshot', () => {
    const { container } = renderWithProviders(
      <Typography text="Text of example" type="headline" />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render a text of type "headline"', () => {
    renderWithProviders(<Typography text="Text of example" type="headline" />)
    const headline = screen.getByRole('heading', { name: 'Text of example' })
    expect(headline).toBeInTheDocument()
    expect(headline).toHaveStyle({
      fontSize: T.fonts.sizes.headline,
      fontWeight: T.fonts.weights.medium,
      lineHeight: '29px'
    })
  })

  it('should render a text of type "paragraphHighlight"', () => {
    renderWithProviders(
      <Typography text="Text of example" type="paragraphHighlight" />
    )
    const paragraphHighlight = screen.getByText('Text of example')
    expect(paragraphHighlight).toHaveStyle({
      fontSize: T.fonts.sizes.paragraphHighlight,
      fontWeight: T.fonts.weights.medium,
      lineHeight: '17px'
    })
  })

  it('should render a text of type "paragraph"', () => {
    renderWithProviders(<Typography text="Text of example" type="paragraph" />)
    const paragraph = screen.getByText('Text of example')
    expect(paragraph).toHaveStyle({
      fontSize: T.fonts.sizes.paragraph,
      fontWeight: T.fonts.weights.regular,
      lineHeight: '17px'
    })
  })

  it('should render a text of type "caption"', () => {
    renderWithProviders(<Typography text="Text of example" type="caption" />)
    const caption = screen.getByText('Text of example')
    expect(caption).toHaveStyle({
      fontSize: T.fonts.sizes.caption,
      fontWeight: T.fonts.weights.regular,
      lineHeight: '16px'
    })
  })

  it('should render a text black center align', () => {
    renderWithProviders(<Typography text="Text of example" type="caption" />)
    const text = screen.getByText('Text of example')
    expect(text).toHaveStyle({
      color: T.colors.black,
      textAlign: 'center',
      justifyContent: 'center'
    })
  })

  it('should render a text red left aligned', () => {
    renderWithProviders(
      <Typography
        text="Text of example"
        type="caption"
        color="error"
        align="left"
      />
    )
    const text = screen.getByText('Text of example')
    expect(text).toHaveStyle({
      color: T.colors.error,
      textAlign: 'left',
      justifyContent: 'left'
    })
  })
})
