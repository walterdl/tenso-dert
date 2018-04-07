// 3rd
import React, { Component } from "react"
import { Switch, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { connect } from "react-redux"
import Scroll from "react-scroll"
import FadePreloader from "fade-preloader"

// Own
import TensoDertTheme from "theme/TensoDertTheme"
import { DOM_ELEMENTS_IDS, ROUTES } from "common/constants"
import ChangeLocationDetector from "components/changeLocationDetector/ChangeLocationDetector"
import Header from "components/header/Header.Styled"
import Home from "components/home/Home.Styled"
import AboutUs from "components/aboutUs/AboutUs.Styled"
import Objectives from "components/objectives/Objectives.Styled"
import Footer from "components/footer/Footer.Styled"

// Actions
import { initStartingAction, setStartingProgress, finishStartingAction } from "actions/start"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(initStartingAction)
    this.setState({
      shouldShowAppPreloader: true
    })
  }

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props
    const { dispatch } = this.props

    // TODO
    // Move setStartingProgress to the reducer
    // How? use something that provide notifications about state changes
    // and dispatch setStartingProgress from that changes handler
    // also move the progress names to constants visible to all the code
    if (currentProps.start.startingInitialized) {
      if (currentProps.products.fetchingCategories &&
      !nextProps.products.fetchingCategories) {
        dispatch(setStartingProgress("categories"))
      }

      if (currentProps.start.progressNames.includes("categories")) {
        dispatch(finishStartingAction)
        this.setState({
          shouldShowAppPreloader: false
        })
      }
    }
  }

  handleLocationChange() {
    Scroll.animateScroll.scrollToTop()
  }

  render() {
    const { shouldShowAppPreloader } = this.state

    return (
      <BrowserRouter>
        <ThemeProvider theme={TensoDertTheme}>
          <div id={DOM_ELEMENTS_IDS.MAIN_ASSEMBLY_NODE}>
            <FadePreloader
              show={shouldShowAppPreloader}
              showInmediatly
              imageUrl={TensoDertTheme.logo} />
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

const mapStateToProps = state => {
  const { start, products } = state

  return {
    start,
    products
  }
}

export default connect(mapStateToProps)(App)
