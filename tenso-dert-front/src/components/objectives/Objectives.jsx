// 3rd
import React from "react"
import { withTheme } from "styled-components"


const Objectives = props => (
  <div className={`${props.className} container`}>
    <div className="objectives-title mb-4">
      Objetivos generales
    </div>
    <div className="objectives__section">
      <img
        className="objectives__section-image float-right"
        src={props.theme.objective1Picture}
        alt="About" />
      <div className="objectives__subtitle mb-1">Consolidación en el mercado actual</div>
      <p>
        Mediante la actualización tecnológica y la diversificación de sus productos en el mercado con excelentes estándares de calidad.
      </p>
      <div className="objectives__subtitle mb-1">Crecimiento de nuestras líneas de productos</div>
      <p>
        Especialmente en la Línea Automotriz, Institucional y Porcelanato.
      </p>
      <div className="objectives__subtitle mb-1">Diversificación Geográfica</div>
      <p>
        Llegar a satisfacer las necesidades de los consumidores a nivel nacional e internacional.
      </p>
      <div className="cleaner" />
    </div>
    <hr />
    <div className="objectives-title mb-4">
      Objetivos específicos
    </div>
    <div className="objectives__section">
      <img
        className="objectives__section-image float-right"
        src={props.theme.objective2Picture}
        alt="About" />
      <img
        className="objectives__section-image float-right"
        src={props.theme.objective3Picture}
        alt="About" />
      <div className="objectives__subtitle mb-1">Desarrollo Tecnológico</div>
      <p>
        Concluirá la modernización de los equipos de producción para garantizar la productividad y permanentemente control de procesos con la máxima flexibilidad, eficiencia y calidad.
      </p>
      <div className="objectives__subtitle mb-1">Desarrollo Humano</div>
      <p>
        Mantendrá su preocupación permanente en la selección del Recurso Humano, para que cumplan a cabalidad las labores encomendadas y así se llegue a afrontar los desafíos de la organización y del mercado.
      </p>
      <div className="objectives__subtitle mb-1">Desarrollo Comercial</div>
      <p>
        Continuará consolidándose como Empresa, fortaleciendo cada una de sus áreas y buscando un crecimiento fuerte en el mercado para afrontar con firmeza los altibajos del Mismo.
      </p>
      <div className="objectives__subtitle mb-1">Orientación al Cliente</div>
      <p>
        Tiene como objetivo fundamental la satisfacción plena de la necesidades y expectativas de nuestros clientes internos y externos.
      </p>
      <div className="cleaner" />
    </div>
  </div>
)

export default withTheme(Objectives)