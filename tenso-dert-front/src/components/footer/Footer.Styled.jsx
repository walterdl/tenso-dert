import styled from "styled-components"
import Footer from "./Footer"

const Footer_Styled = styled(Footer)`
  background-color: ${props => props.theme.colors.grayText};

  .footer__container {
    padding-top: 30px;
    padding-bottom: 30px;

    p {
      text-align: center;
      color: white;
    }
  }
`

export default Footer_Styled