import logo from "theme/logo.png"
import distributorBanner from "theme/distributor-banner.jpg"
import buildingPicture from "theme/td-building.png"
import waterPicture from "theme/td-water.png"
import automotrizPicture from "theme/linea-automotriz.png"
import institucionalPicture from "theme/linea-institucional.png"
import porcelanatoPicture from "theme/linea-porcelanato.png"
import materiasPrimasPicture from "theme/materias-primas.png"
import about1Picture from "theme/about-1.png"
import about2Picture from "theme/about-2.png"
import about3Picture from "theme/about-3.png"
import { hexToRgbA } from "common/utils"

const viewPortBreakPoints = {
  zero: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
}

const getBreakpoint = (from, to) => {
  if (!from || !Object.keys(viewPortBreakPoints).includes(from)) {
    return
  }

  let breakPoint = `@media (min-width: ${viewPortBreakPoints[from]})`

  if (to && Object.keys(viewPortBreakPoints).includes(to)) {
    let pxIndex = viewPortBreakPoints[to].indexOf("px")
    let breakPointNumber = parseInt(viewPortBreakPoints[to].substring(0, pxIndex), 10)
    breakPoint += ` and (max-width: ${breakPointNumber - 1}px)`
  }

  return breakPoint
}

const colors = {
  primaryColor: "#45519d",
  primaryColorLight: "#619acc",
  grayText: "#696969",
  lightGray: "#f7f7f7",
  black: "#000000",
  white: "#ffffff",
  inversePrimary: "inversePrimary"
}

const texts = {
  titles1: `
    font-size: 32px;
    font-weight: bold;
  `,
  titles2: `
    font-size: 24px;
    font-weight: bold;
  `,
  titles3: `
    font-size: 19px;
    font-weight: normal;
  `,
  parragraphs: `
    font-size: 1&px;
    font-weight: normal;
  `
}

const getBaseButtonStyle = (baseColorParam, changeColor = true) => {
  let baseColor = !Object.values(colors).includes(baseColorParam) ?
    colors.primaryColor : baseColorParam

  let color = null

  switch (baseColor) {
    case colors.primaryColor:
      color = "white"
      break
    case colors.white:
      color = colors.primaryColor
      break
    default:
      color = "white"
      break
  }

  let style = `
    transition:
      color .15s ease-in-out,
      background-color .15s ease-in-out,
      border-color .15s ease-in-out,
      box-shadow .15s ease-in-out;
    background-color: ${baseColor === colors.white ? "white" : "transparent"};
    border: 1px solid ${baseColor === colors.white ? colors.primaryColor : baseColor};
    border-radius: 0px;
    color: ${baseColor === colors.white ? colors.primaryColor : baseColor};
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0 0.2rem ${hexToRgbA(baseColor, 0.5)};
    }
  `

  if (changeColor) {
    style += `

      &:hover {
        background-color: ${baseColor};
        color: ${color};
      }
    `
  }

  return style
}

const tensoDertTheme = {
  colors,
  logo,
  texts,
  distributorBanner,
  buildingPicture,
  waterPicture,
  automotrizPicture,
  institucionalPicture,
  porcelanatoPicture,
  materiasPrimasPicture,
  about1Picture,
  about2Picture,
  about3Picture,
  getBreakpoint,
  getBaseButtonStyle,
  viewPortBreakPoints
}

export default tensoDertTheme