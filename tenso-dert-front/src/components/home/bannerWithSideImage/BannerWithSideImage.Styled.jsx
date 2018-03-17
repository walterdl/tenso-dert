import styled from "styled-components"
import BannerWithSideImage from "./BannerWithSideImage"

const BannerWithSideImage_Styled = styled(BannerWithSideImage)`
  background-color: ${props => props.theme.colors.lightGray};
  padding-top: 15px;
  padding-bottom: 15px;

  .bwsi__container {
    .bwsi__title-col {
      .bwsi__title {
        ${props => props.theme.texts.titles2}
        text-align: right;

        ${props => props.theme.getBreakpoint("zero", "md")} {
          text-align: left;
        }
      }
    }

    .bwsi__message-col {
      .bwsi__message-img {
        float: right;
      }
    }
  }
`

export default BannerWithSideImage_Styled
