import React, {Component} from "react"

class BannerWithSideImage extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="bwsi__container container">
          <div className="row justify-content-md-center">
            <div className="bwsi__title-col col-12 col-md-auto">
              <p className="bwsi__title">{this.props.title}</p>
            </div>
            <div className="bwsi__message-col col-12 col-md-8">
              <p>
                <img
                  className="bwsi__message-img"
                  src={this.props.image}
                  alt="Welcome" />
                {this.props.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerWithSideImage