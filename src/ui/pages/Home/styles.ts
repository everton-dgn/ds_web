import styled from 'styled-components'
import T from 'ui/theme'

export const Container = styled.main`
  display: flex;
  width: 100%;
  max-width: ${T.grid.container};
  flex-direction: column;
  margin: 0 auto;
  padding: 0 ${T.grid.margin};
  align-items: center;

  svg {
    fill: ${T.colors.brandPure};
    margin-top: ${T.spacings.s};
    margin-bottom: ${T.spacings.xxl};
  }
`

export const WrapperInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: ${T.grid.gutter};
  row-gap: 5px;
  width: 100%;
  padding: ${T.spacings.l} 0;

  ${T.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${T.breakpoints.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
