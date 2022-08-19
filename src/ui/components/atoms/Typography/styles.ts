import styled, { css } from 'styled-components'
import T from 'ui/theme'
import { Align, Typography } from './types'

const typography = {
  headline: css`
    font-size: ${T.fonts.sizes.headline};
    font-weight: ${T.fonts.weight.medium};
    line-height: 29px;
  `,
  paragraph: css`
    font-size: ${T.fonts.sizes.paragraph};
    font-weight: ${T.fonts.weight.regular};
    line-height: 17px;
  `,
  caption: css`
    font-size: ${T.fonts.sizes.caption};
    font-weight: ${T.fonts.weight.regular};
    line-height: 16px;
  `
}

export const Text = styled.p<{ align: Align; type: Typography }>`
  display: flex;
  width: 100%;
  text-align: ${({ align }) => align};
  padding: 0;
  margin: 0;
  ${({ type }) => typography[type]}}
`
