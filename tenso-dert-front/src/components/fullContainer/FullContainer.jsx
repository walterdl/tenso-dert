import React from "react"

const FullContainer = props => (
  <div
    className={props.className}
    ref={ele => props.getRef && props.getRef(ele)}>
    {props.children}
  </div>
)

export default FullContainer
