import styled, { css } from 'styled-components'
import T from 'ui/theme'

const layout = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const Grid = styled.div`
  ${layout};
  min-height: 100vh;
`

export const WrapperPage = styled.div`
  ${layout};
  align-items: center;
  height: 100%;
  flex-grow: 1;
  padding-bottom: ${T.spacings.s};
`
