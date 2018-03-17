// 3rd
import styled from "styled-components"

// Own
import { hexToRgbA } from "common/utils"
import NextArrow from "./NextArrow"

const NextArrow_Styled = styled(NextArrow)`
  right: 20px;
  width: auto;
  height: auto;
  font-size: initial;
  line-height: initial;
  box-shadow: 0px 0px 20px 0px ${(props) => hexToRgbA(props.theme.colors.black, 0.75)};

  &::before {
    content: none;
  }

  button {
    ${props => props.theme.getBaseButtonStyle(props.theme.colors.white)}
    padding: 2px 10px;
    font-size: 20px;
  }
`

export default NextArrow_Styled