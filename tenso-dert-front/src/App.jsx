// 3rd
import React, { Component } from "react"
import { Switch, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Scroll from "react-scroll"

// Own
import TensoDertTheme from "theme/TensoDertTheme"
import { DOM_ELEMENTS_IDS, ROUTES } from "common/constants"
import ChangeLocationDetector from "components/changeLocationDetector/ChangeLocationDetector"
import Header from "components/header/Header.Styled"
import Home from "components/home/Home.Styled"
import AboutUs from "components/aboutUs/AboutUs.Styled"
import Objectives from "components/objectives/Objectives.Styled"
import Footer from "components/footer/Footer.Styled"

class App extends Component {
  constructor(props) {
    super(props)

    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  handleLocationChange() {
    Scroll.animateScroll.scrollToTop()
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={TensoDertTheme}>
          <div id={DOM_ELEMENTS_IDS.MAIN_ASSEMBLY_NODE}>
            <Header />
            <ChangeLocationDetector
              onLocationChange={this.handleLocationChange}>
              <Switch>
                <Route exact path={ROUTES.home} component={Home}/>
                <Route exact path={ROUTES.about} component={AboutUs}/>
                <Route exact path={ROUTES.objectives} component={Objectives}/>
              </Switch>
            </ChangeLocationDetector>
            <Footer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
