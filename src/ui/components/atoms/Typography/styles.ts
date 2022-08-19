import styled, { css } from 'styled-components'
import T from 'ui/theme'
import { Align, Color, Typography } from './types'

const typography = {
  headline: css`
    font-size: ${T.fonts.sizes.headline};
    font-weight: ${T.fonts.weights.medium};
    line-height: 29px;
  `,
  paragraphHighlight: css`
    font-size: ${T.fonts.sizes.paragraphHighlight};
    font-weight: ${T.fonts.weights.medium};
    line-height: 17px;
  `,
  paragraph: css`
    font-size: ${T.fonts.sizes.paragraph};
    font-weight: ${T.fonts.weights.regular};
    line-height: 17px;
  `,
  caption: css`
    font-size: ${T.fonts.sizes.caption};
    font-weight: ${T.fonts.weights.regular};
    line-height: 16px;
  `
}

const textColor = {
  black: css`
    color: ${T.colors.black};
  `,
  error: css`
    color: ${T.colors.error};
  `
}

export const Text = styled.p<{ align: Align; type: Typography; color: Color }>`
  display: flex;
  width: 100%;
  text-align: ${({ align }) => align};
  justify-content: ${({ align }) => align};
  padding: 0;
  margin: 0;
  ${({ type }) => typography[type]}}
  ${({ color }) => textColor[color]}}
`
