// 3rd
import styled from "styled-components"

// Own
import Header from "./Header"
import { hexToRgbA } from "common/utils"

export const HEADER_TOP_LINE_HEIGHT = 10

const Header_Styled = styled(Header)`
  .header__top-line {
    border: 0;
    border-top: ${() => HEADER_TOP_LINE_HEIGHT}px solid ${(props) => props.theme.colors.primaryColor};
  }

  .header__affix-content {
    background-color: white;
    max-width: inherit;
    position: relative;
    z-index: 15;
    width: inherit;

    &::after {
      content:"";
      box-shadow: 0px 2px 25px 2px ${props => hexToRgbA(props.theme.colors.black, 0.75)};
      position: absolute;
      z-index: -1;
      width: 100%;
    }

    .header__affix-content-row-container {
      background-color: white;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 10px;

      ${props => props.theme.getBreakpoint("xs", "sm")} {
        padding-left: 5px;
        padding-right: 5px;
      }

      .header__logo-container {
        margin-top: 10px;
        text-align: center;

        img {
          max-height: 90px;
          transition: max-height 0.2s;
        }
      }

      .header__links-container {
        height: 100%;
        margin-left: auto;
        margin-right: auto;

        ${props => props.theme.getBreakpoint("zero", "sm")} {
          display: none;
        }
      }

      .header__mobile-links-container {
        text-align: right;

        ${props => props.theme.getBreakpoint("sm")} {
          display: none;
        }

        .header__mobile-links-dropdown {
          .header__mobile-links-dropdown-btn {
            ${props => props.theme.getBaseButtonStyle(props.theme.colors.primaryColor)}
          }

          .header__mobile-links-dropdown-menu {
            border-radius: 0px;

            .link-container {
              border-bottom: 2px solid transparent;
              transition: all 0.2s;
              cursor: pointer;
              margin-bottom: 4px;

              .link {
                color: ${props => props.theme.colors.grayText};
                text-decoration: none;
                text-transform: uppercase;
              }

              &:focus,
              &:hover {
                background-color: white;
                border-bottom-color: ${props => props.theme.colors.primaryColor};

                .link {
                  color: black;
                }
              }

              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }

  .is-affixed {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    .header__affix-content-row-container {
      .header__logo-container {
        img {
          max-height: 60px;
        }
      }
    }
  }
`

export default Header_Styled