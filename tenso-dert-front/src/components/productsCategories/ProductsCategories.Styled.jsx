import styled from "styled-components"
import {hexToRgbA} from "common/utils"

import ProductsCategories from "./ProductsCategories"

const ProductsCategories_Styled = styled(ProductsCategories)`
  .pc__title {
    background-color: ${props => props.theme.colors.primaryColor};
    color: white;
    margin-left: -15px;
    margin-right: -15px;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    ${props => props.theme.texts.titles2}
  }

  .pc__row {
    .pc__col {
      background-color: ${props => hexToRgbA(props.theme.colors.primaryColorLight, 0.7)};
      border: 1px solid ${props => props.theme.colors.primaryColor};
      cursor: pointer;
      padding-top: 15px;
      padding-bottom: 15px;
      transition: background-color 0.3s;
      overflow: hidden;

      ${props => props.theme.getBreakpoint("zero", "sm")} {
        &:not(:only-child) {
          &:not(:first-child) {
            border-top-width: 0px;
            border-bottom: 0.5px solid ${props => props.theme.colors.primaryColor};
          }

          &:last-child {
            border-bottom: 1px solid ${props => props.theme.colors.primaryColor};
          }
        }
      }

      ${props => props.theme.getBreakpoint("sm", "md")} {
        &:not(:only-child) {
          border-left-color: transparent;
          border-top-color: transparent;

          &:nth-child(odd) {
            border-left-color: ${props => props.theme.colors.primaryColor};
          }

          &:nth-child(1),
          &:nth-child(2) {
            border-top-color: ${props => props.theme.colors.primaryColor};
          }
        }
      }

      ${props => props.theme.getBreakpoint("md")} {
        &:not(:only-child) {
          border-left-color: transparent;
          border-top-color: transparent;

          &:nth-child(4n),
          &:first-child {
            border-left-color: ${props => props.theme.colors.primaryColor};
          }
        }
      }

      &:hover,
      &:focus {
        background-color:
          ${props => hexToRgbA(props.theme.colors.primaryColorLight, 1)};

        .pc__col-title {
          transform: scale(1.1, 1.1);

          span {
            border-bottom-color: white;
          }
        }
      }

      .pc__col-img {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .pc__col-title {
        color: white;
        text-transform: uppercase;
        text-align: center;
        transition: transform 0.2s;
        ${props => props.theme.texts.titles3}

        span {
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
        }
      }
    }
  }
`

export default ProductsCategories_Styled