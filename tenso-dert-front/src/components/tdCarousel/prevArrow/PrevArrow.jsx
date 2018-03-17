import React from "react"
import FontAwesome from "react-fontawesome"

const PrevArrow = props => (
  <div className={props.className}>
    <button
      type="button"
      onClick={props.onClick}>
      <FontAwesome name="caret-left" />
    </button>
  </div>
)

export default PrevArrow
