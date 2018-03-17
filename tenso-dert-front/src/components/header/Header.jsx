// 3rd
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Affix } from "react-overlays"
import { Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { withTheme } from "styled-components"
import FontAwesome from "react-fontawesome"
import ResizeAware from "react-resize-aware"

// Own
import {ROUTES} from "common/constants"
import { HEADER_TOP_LINE_HEIGHT } from "./Header.Styled"
import FullContainer from "components/fullContainer/FullContainer.Styled"
import HeaderLink from "./headerLink/HeaderLink.Styled"


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenuOpen: false,
      affixPlaceholderHeight: 0
    }

    this.setAffixPlaceholderHeight = this.setAffixPlaceholderHeight.bind(this)
    this.mobileMenuToggle = this.mobileMenuToggle.bind(this)
  }

  componentDidMount() {
    this.setAffixPlaceholderHeight()
  }

  setAffixPlaceholderHeight() {
    if (!this.headerElement) {
      return
    }

    let headerContent = this.headerElement.querySelectorAll(".header__affix-content")

    if (!headerContent.length) {
      return
    }

    headerContent = headerContent[0]

    this.setState({
      affixPlaceholderHeight: window.pageYOffset > HEADER_TOP_LINE_HEIGHT ? headerContent.offsetHeight : 0
    })
  }

  mobileMenuToggle() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }

  render () {
    return (
      <FullContainer
        className={this.props.className}
        getRef={ele => this.headerElement = ele}>
        <div className="header__top-line" />
        <div
          className="header__affix-content-placeholder"
          style={{ height: this.state.affixPlaceholderHeight }} />
        <Affix
          offsetTop={HEADER_TOP_LINE_HEIGHT}
          affixClassName="is-affixed"
          onAffixed={this.setAffixPlaceholderHeight}
          topClassName="is-at-top"
          onAffixedTop={this.setAffixPlaceholderHeight}>
          <div className="header__affix-content">
            <Row
              noGutters
              className="header__affix-content-row-container align-items-center">
              <div className="col-3 col-sm-12 header__logo-container">
                <ResizeAware
                  style={{ position: "relative" }}
                  onlyEvent
                  onResize={this.setAffixPlaceholderHeight}
                >
                  <img
                    onLoad={this.setAffixPlaceholderHeight}
                    className="img-fluid"
                    src={this.props.theme.logo}
                    alt="Tenso Dert" />
                </ResizeAware>
              </div>
              <div className="col">
                <Row
                  noGutters
                  className="header__links-container justify-content-center container">
                  <div className="header__links-group col-auto">
                    <HeaderLink link={ROUTES.home} linkText="Inicio" />
                    <HeaderLink link={ROUTES.about} linkText="Quienes somos" />
                  </div>
                  <div className="header__links-group col-auto">
                    <HeaderLink link={ROUTES.home} linkText="Línea automotriz" />
                    <HeaderLink link={ROUTES.home} linkText="Línea institucional" />
                  </div>
                  <div className="header__links-group col-auto">
                    <HeaderLink link={ROUTES.home} linkText="Línea porcelanato" />
                    <HeaderLink link={ROUTES.home} linkText="Materias primas" />
                  </div>
                  <div className="header__links-group col-auto">
                    <HeaderLink link={ROUTES.home} linkText="Contácto" />
                  </div>
                </Row>
                <div className="header__mobile-links-container">
                  <Dropdown
                    className="header__mobile-links-dropdown"
                    isOpen={this.state.mobileMenuOpen}
                    toggle={() => {this.mobileMenuToggle()}}>
                    <DropdownToggle className="header__mobile-links-dropdown-btn">
                      <FontAwesome name="bars" />
                    </DropdownToggle>
                    <DropdownMenu className="header__mobile-links-dropdown-menu">
                      <DropdownItem
                        tag="div"
                        className="link-container">
                        <Link to={ROUTES.home} className="link">Inicio</Link>
                      </DropdownItem>
                      <DropdownItem
                        tag="div"
                        className="link-container">
                        <Link to={ROUTES.about} className="link">Quienes somos</Link>
                      </DropdownItem>
                      <DropdownItem
                        tag="div"
                        className="link-container">
                        <Link to={ROUTES.home} className="link">Línea automotriz</Link>
                      </DropdownItem>
                      <DropdownItem
                        tag="div"
                        className="link-container">
                        <Link to={ROUTES.home} className="link">Línea institucional</Link>
                      </DropdownItem>
                      <DropdownItem
                        tag="div"
                        className="link-container">
                        <Link to={ROUTES.home} className="link">Línea porcelanato</Link>
                      </DropdownItem>
                      <DropdownItem
                        tag="div"
                        className="link-container">
                        <Link to={ROUTES.home} className="link">Materias primas</Link>
                      </DropdownItem>
                      <DropdownItem
                        tag="div"
                        className="link-container">
                        <Link to={ROUTES.home} className="link">Contácto</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </Row>
          </div>
        </Affix>
      </FullContainer>
    )
  }
}

export default withTheme(Header)
