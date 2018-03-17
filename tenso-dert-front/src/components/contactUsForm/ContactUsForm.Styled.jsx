import styled from "styled-components"
import ContactUsForm from "./ContactUsForm"

const ContactUsForm_Styled = styled(ContactUsForm)`
  background-color: ${props => props.theme.colors.primaryColorLight};
  padding-top: 30px;
  padding-bottom: 30px;

  .cuf__row {
    .cuf__col {
      .cuf__title {
        color: white;
        ${props => props.theme.texts.titles2}
      }

      .icon {
        color: white;
        vertical-align: middle;
      }

      .text {
        color: white;
      }

      &.contact-info {
        text-align: center;
      }

      &.form-col {
        .separator {
          height: 15px;
        }

        .cuf__country-container {
          flex: 1 1 auto;
          width: 1%;

          .cuf__country-input {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;

            &:focus {
              z-index: 3;
            }
          }
        }

        .cuf__distributor-container {
          input {
            margin-top: 4px;
            width: 16px;
            height: 16px;
          }

          label {
            color: white;
          }
        }

        .cuf__send-form-btn {
          ${props => props.theme.getBaseButtonStyle(props.theme.colors.primaryColor)}
          background-color: ${props => props.theme.colors.primaryColor};
          border-color: ${props => props.theme.colors.primaryColor};
          color: white;
          width: 100%;

          &:hover {
            background-color: white;
            border-color: ${props => props.theme.colors.primaryColor};
            color: ${props => props.theme.colors.primaryColor};
          }
        }
      }
    }
  }
`

export default ContactUsForm_Styled