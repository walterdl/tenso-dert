// 3rd
import React from "react"
import {withTheme} from "styled-components"

// Own
import FullContainer from "components/fullContainer/FullContainer.Styled"
import TDCarousel from "components/tdCarousel/TDCarousel.Styled"
import DistributorBanner from "./distributorBanner/DistributorBanner.Styled"
import BannerWithSideImage from "./bannerWithSideImage/BannerWithSideImage.Styled"
import ProductsCategories from "components/productsCategories/ProductsCategories.Styled"
import ContactUsForm from "components/contactUsForm/ContactUsForm.Styled"

const objectiveMessage = `
La fabricación y comercialización de detergentes líquidos y en polvo,
desinfectante en todas sus presentaciones además de todos los productos que sean necesarios en el mercado de aseo,
uso personal y otros; la importación, exportación, compra, venta, distribución de mercancía para el área de aseo, uso personal,
materias primar envases y empaques y productos o mercancía para otros mercados existentes.
`

const welcomeMessage = `
Apreciado usuario, le damos la bienvenida a nuestro sitio web, en donde encontrara información de nuestros productos, que facilitarán la limpieza de su empresa ó negocio haciendola más productivo y eficaz.

En TensoDert, tenemos un objetivo claro: "Excelentes productos, al precio Justo".

Al decidirce por nosotros, su empresa estará beneficiada economicamente, pues usted podrá adquirir más producto por un precio sin igual.`


const Home = props => (
  <div className={props.className}>
    <TDCarousel />
    <FullContainer>
      <DistributorBanner />
    </FullContainer>
    <BannerWithSideImage
      title="Bienvenido:"
      message={welcomeMessage}
      image={props.theme.buildingPicture}
    />
    <div className="home__bwsi-separator"/>
    <BannerWithSideImage
      title="Objetivo:"
      message={objectiveMessage}
      image={props.theme.waterPicture}
    />
    <ProductsCategories />
    <div className="home__cuf-separator"/>
    <ContactUsForm />
  </div>
)

export default withTheme(Home)
