import styled from 'styled-components'
import T from 'ui/theme'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 0;
  align-items: center;

  ${T.breakpoints.custom(800)} {
    margin: 120px auto;
    padding: 0 20px;
  }

  svg {
    fill: ${T.colors.primaryHover};
  }
`
