import React, {Component} from "react"
import {withTheme} from "styled-components"

class ProductsCategories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          name: "línea automotríz",
          image: this.props.theme.automotrizPicture,
        },
        {
          name: "línea institucional",
          image: this.props.theme.institucionalPicture,
        },
        {
          name: "línea porcelanato",
          image: this.props.theme.porcelanatoPicture,
        },
        {
          name: "materias primas",
          image: this.props.theme.materiasPrimasPicture
        }
      ]
    }
  }

  render() {
    let categories = []
    this.state.categories.forEach((category, index) => {
      categories.push(
        <div
          className="pc__col col-12 col-sm-6 col-md-4"
          key={index}>
          <img
            className="pc__col-img img-fluid"
            src={category.image}
            alt={category.name} />
          <p className="pc__col-title">
            <span>{category.name}</span>
          </p>
        </div>
      )
    })

    return (
      <div className={`${this.props.className} container`}>
        <div className="pc__title">Productos</div>
        <div className="pc__row row align-items-center justify-content-center">
          {categories}
        </div>
      </div>
    )
  }
}

export default withTheme(ProductsCategories)