// 3rd
import styled from "styled-components"

// Own
import TDCarousel from "./TDCarousel"
import { hexToRgbA } from "common/utils"

const TDCarousel_Styled = styled(TDCarousel)`
  ${props => props.theme.getBreakpoint("zero", "md")} {
    padding-left: 0;
    padding-right: 0;
  }

  .td-carousel {
    background:
      radial-gradient(ellipse at center,
        ${props => props.theme.colors.primaryColor} 38%,
        ${props => props.theme.colors.primaryColorLight} 100%);

    .td-carousel__item {
      .item__image-container {
        padding-top: 42.85%;
        position: relative;
        width: 100%;

        .item__image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .td-carousel__dots-cotainer {
      bottom: 10px;

      li {
        button {
          &::before {
            background-color: ${props => hexToRgbA(props.theme.colors.white, 0.75)};
            border: 1px solid white;
            border-radius: 10px;
            color: ${props => props.theme.colors.primaryColor};
            content: "•";
          }
        }
      }
    }
  }
`

export default TDCarousel_Styled
