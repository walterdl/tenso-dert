import React, {Component} from "react"
import {withTheme} from "styled-components"

class DistributorBanner extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="d-banner__transversal-line" />
        <div className="d-banner__content-container container">
          <div className="d-banner__content row">
            <div className="d-banner__content-col col-12 col-sm-12 col-md">
              <img
                className="img-fluid"
                src={this.props.theme.distributorBanner}
                alt="distributor banner"/>
            </div>
            <div className="d-banner__content-col description-col col-12 col-sm-12 col-md align-self-center">
              <p className="d-banner__title">Convertirse en un distribuidor</p>
              <p className="d-banner__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withTheme(DistributorBanner)
