import React from "react"
import FontAwesome from "react-fontawesome"

const NextArrow = props => (
  <div className={props.className}>
    <button
      type="button"
      onClick={props.onClick}>
      <FontAwesome name="caret-right" />
    </button>
  </div>
)

export default NextArrow
