import styled, { css } from 'styled-components'
import T from 'ui/theme'
import { BtnProps } from './types'

const SizesBtn = {
  medium: css`
    height: min-content;
    font-size: ${T.fonts.sizes.caption[0]};
    padding: 12px;
    font-weight: ${T.fonts.extraBold};
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
    border: 2px solid transparent;
    text-shadow: 0 0 3px #00000099;
    transition: background-color 0.15s ease-in-out;
    width: 100%;
    ${!!color && ColorsBtn[color]};
    ${!!size && SizesBtn[size]}

    ${T.breakpoints.custom(480)} {
      width: ${fullWidth ? '100%' : 'fit-content'};
      min-width: ${fullWidth ? '300px' : 'inherit'};
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${T.colors.grey};
    }

    &:focus {
      border: 2px solid ${T.colors.white};
      box-shadow: 0 0 0 2px #222;
    }

    span {
      color: ${T.colors.white};
    }

    svg + span {
      margin-left: 10px;
    }

    svg {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      min-height: 2rem;
      color: ${T.colors.white};
    }
  `}
`
