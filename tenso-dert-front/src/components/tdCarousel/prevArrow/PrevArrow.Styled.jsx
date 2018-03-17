// 3rd
import styled from "styled-components"

// Own
import PrevArrow from "./PrevArrow"
import { hexToRgbA } from "common/utils"

const PrevArrow_Styled = styled(PrevArrow)`
  left: 20px;
  width: auto;
  height: auto;
  font-size: initial;
  line-height: initial;
  box-shadow: 0px 0px 20px 0px ${(props) => hexToRgbA(props.theme.colors.black, 0.75)};
  z-index: 1;

  &::before {
    content: none;
  }

  button {
    ${props => props.theme.getBaseButtonStyle(props.theme.colors.white)}
    padding: 2px 10px;
    font-size: 20px;
  }
`

export default PrevArrow_Styled