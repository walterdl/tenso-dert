import styled from "styled-components"
import HeaderLink from "./HeaderLink"

const HeaderLink_Styled = styled(HeaderLink)`
  border-bottom: 2px solid transparent;
  display: inline-block;
  padding: 10px;
  transition: all 0.2s;

  .header-link__link {
    color: ${props => props.theme.colors.grayText};
    transition: all 0.2s;

    &:hover {
      text-decoration: none;
    }
  }

  &:hover {
    transform: scale(1.1, 1.1);
    border-bottom-color: ${props => props.theme.colors.primaryColor};

    .header-link__link {
      color: black;
    }
  }
`

export default HeaderLink_Styled
