import styled from "styled-components"
import Objectives from "./Objectives"

const Objectives_Styled = styled(Objectives)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  .objectives-title {
    ${props => props.theme.texts.titles2}
  }

  .objectives__section {

    .objectives__section-image {
      &.float-right {
        float: right;
        clear: right;
      }
    }

    .objectives__subtitle {
      ${props => props.theme.texts.titles3}
      font-weight: 500;
    }

    p:last-of-type {
      margin-bottom: 0;
    }

    .cleaner {
      clear: both;
    }
  }
`

export default Objectives_Styled