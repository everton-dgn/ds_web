import styled from 'styled-components'
import T from 'ui/theme'

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: ${T.borderRadius.s};
  padding: 5px 20px;
  border: 2px solid transparent;
  box-shadow: 0 0 0 1px #333;
  transition: 0.1s linear;

  &:focus {
    border: 2px solid #222;
    box-shadow: 0 0 0 2px #fff;
  }
`
