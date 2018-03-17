import styled from "styled-components"
import DistributorBanner from "./DistributorBanner"

const DistributorBanner_Styled = styled(DistributorBanner)`
  .d-banner__transversal-line {
    background-color: ${props => props.theme.colors.primaryColor};
    height: 100px;
    width: 100%;
  }

  .d-banner__content-container {
    margin-top: -40px;

    .d-banner__content {
      background-color: ${props => props.theme.colors.primaryColorLight};

      .d-banner__content-col {
        color: white;

        &.description-col {
          padding-top: 10px;
          padding-bottom: 10px;
        }

        img {
          margin-top: -15px;
        }

        .d-banner__title {
          ${props => props.theme.texts.titles2}
        }

        .d-banner__p {
          ${props => props.theme.texts.parragraphs}
        }
      }
    }
  }
`

export default DistributorBanner_Styled