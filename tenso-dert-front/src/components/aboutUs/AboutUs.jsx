// 3rd
import React from "react"
import {withTheme} from "styled-components"
import {Link} from "react-router-dom"

// Own
import {ROUTES} from "common/constants"

const AboutUs = props => {
  return (
    <div className={`${props.className} container`}>
      <div className="about-us__section">
        <div className="about-us__section-title">Nuestra misión</div>
        <img
          className="about-us__section-image float-right"
          src={props.theme.about1Picture}
          alt="About" />
        <p>
          *Nuestra misión es satisfacer las necesidades de nuestros clientes, y responder en gran manera a las expectativas que estos se han generado con productos de alta Calidad, precios justos y un excelente servicio, impulsando así mismo la innovación y el desarrollo de nuevos productos asegurando el permanente progreso de la Empresa.
        </p>
        <p>
          *Promover el mejoramiento de la calidad de vida de su personal, la retribución adecuada y justa para los miembros de la Misma, sus familias, accionistas, la sociedad en general y el estado.
        </p>
        <div className="cleaner" />
      </div>
      <hr />
      <div className="about-us__section">
        <div className="about-us__section-title">Nuestra Visión</div>
        <img
          className="about-us__section-image float-left"
          src={props.theme.about2Picture}
          alt="About" />
        <p>*Ser uno de los laboratorios mas innovadores en productos especializados para el cuidado distinguiéndose por ser líder en el mercado, por la calidad, mejoramiento continuo; atención personalizada a sus clientes y además por los altos niveles de productividad y eficiencia.</p>
        <p>*Nos vemos como una gran Empresa , con un buen posicionamiento local, nacional e internacional en la producción y comercialización de productos especializados para el cabello y cosméticos.</p>
        <div className="cleaner" />
      </div>
      <hr />
      <div className="about-us__section">
        <div className="about-us__section-title">Conozca nuestros objetivos</div>
        <img
          className="about-us__section-image float-right"
          src={props.theme.about3Picture}
          alt="About" />
        <p>Mediante la actualización tecnológica y la diversificación de sus productos en el mercado con excelentes estándares de calidad</p>
        <p><Link to={ROUTES.home}>Ver más...</Link></p>
        <div className="cleaner" />
      </div>
    </div>
  )
}

export default withTheme(AboutUs)