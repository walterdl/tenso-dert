import styled from "styled-components"
import AboutUs from "./AboutUs"

const AboutUs_Styled = styled(AboutUs)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  .about-us__section {
    .about-us__section-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1.1rem;

      &.right {
        text-align: right;
      }
    }

    .about-us__section-image {
      &.float-right {
        float: right;
      }

      &.float-left {
        float: left;
      }
    }

    p:last-of-type {
      margin-bottom: 0;
    }

    .cleaner {
      clear: both;
      margin-bottom: 1rem;
    }
  }
`

export default AboutUs_Styled