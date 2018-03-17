// 3rd
import { Component } from "react"
import { withRouter } from "react-router-dom"

class ChangeLocationDetector extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      if (typeof this.props.onLocationChange === "function") {
        this.props.onLocationChange()
      }
    }
  }

  render () {
    return this.props.children
  }
}

export default withRouter(ChangeLocationDetector)