import styled from 'styled-components'
import T from 'ui/theme'

export const TitleSection = styled.h1`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  padding: 0 20px;
  margin: 20px 0;
  font-size: ${T.fonts.sizes.caption[0]};
  font-weight: ${T.fonts.medium};

  ${T.breakpoints.custom(800)} {
    font-size: ${T.fonts.sizes.caption[0]};
  }
`
