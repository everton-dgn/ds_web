import styled, { css } from 'styled-components'
import T from 'ui/theme'
import { BtnProps } from './types'

const SizesBtn = {
  medium: css`
    height: min-content;
    font-size: ${T.fonts.sizes.caption[0]};
    padding: 12px;
    font-weight: ${T.fonts.weights.extraBold};
    max-width: 224px;
  `
}

const ColorsBtn = {
  blue: css`
    background-color: ${T.colors.brandDark};

    &:hover {
      background-color: ${T.colors.brandPure};
    }
  `
}

export const Container = styled.button<BtnProps>`
  ${({ fullWidth, color, size }) => css`
    cursor: pointer;
    border-radius: ${T.borderRadius.m};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border: 1px solid transparent;
    transition: background-color 0.15s ease-in-out;
    width: 100%;
    color: ${T.colors.white};
    ${!!color && ColorsBtn[color]};
    ${!!size && SizesBtn[size]}
    ${fullWidth &&
    css`
      max-width: 100%;
    `}

    ${T.breakpoints.tablet} {
      width: 100%;
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${T.colors.grey};
    }

    &:focus {
      border: 1px solid ${T.colors.white};
      box-shadow: 0 0 0 1px ${T.colors.black};
    }

    &:active {
      border: 1px solid transparent;
      box-shadow: none;
    }
  `}
`
