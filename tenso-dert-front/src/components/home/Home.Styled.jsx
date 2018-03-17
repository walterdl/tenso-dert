// 3rd
import styled from "styled-components"

// Own
import Home from "./Home"

const Home_Styled = styled(Home)`
  .home__bwsi-separator {
    border-bottom: 1px solid ${props => props.theme.colors.primaryColorLight};
  }

  .home__cuf-separator {
    height: 15px;

    ${props => props.theme.getBreakpoint("zero", "sm")} {
      height: 0;
    }
  }
`

export default Home_Styled
