// 3rd
import React from "react"
import { Link } from "react-router-dom"

const HeaderLink = props => {
  return (
    <div className={`${props.className}`}>
      <Link
        to={props.link}
        className="header-link__link text-uppercase">
        {props.linkText}
      </Link>
    </div>
  )
}

export default HeaderLink
