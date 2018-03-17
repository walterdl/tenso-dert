// 3rd
import React, { Component } from "react"
import SlickCarousel from "react-slick"

// Own
import clean1 from "theme/dummy/carousel/clean1.jpg"
import clean2 from "theme/dummy/carousel/clean2.jpg"
import clean3 from "theme/dummy/carousel/clean3.jpg"
import PrevArrow from "./prevArrow/PrevArrow.Styled"
import NextArrow from "./nextArrow/NextArrow.Styled"

const items = [
  {
    src: clean1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: clean2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: clean3,
    altText: "Slide 3",
    caption: "Slide 3"
  }
]

class TDCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      carouselSettings: {
        arrows: true,
        dots: true,
        dotsClass: "slick-dots td-carousel__dots-cotainer",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  }

  renderSlides() {
    return items.map((item) => {
      return (
        <div
          className="td-carousel__item"
          key={item.src}>
          <div className="item__image-container">
            <img
              className="item__image"
              src={item.src}
              alt={item.altText} />
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={`${this.props.className} container`}>
        <SlickCarousel
          className="td-carousel"
          {...this.state.carouselSettings}>
          { this.renderSlides() }
        </SlickCarousel>
      </div>
    )
  }
}

export default TDCarousel
