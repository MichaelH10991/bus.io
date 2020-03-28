import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Heading = props => {
  const { title } = props

  const [state, setState] = useState(linkStyle)

  function handleClick() {
    setState({
      backgroundColor: "#619ffd",
      color: "#000000"
    })
  }

  return (
    <>
      <div style={heading}>
        <h1>{title}</h1>
        <div>
          <Link style={state} to="/">
            Saved
          </Link>
          <Link style={state} to="/find">
            Find
          </Link>
          <Link style={state} to="/about">
            About
          </Link>
        </div>
      </div>
    </>
  )
}

const heading = {
  textAlign: "center",
  // letterSpacing: "10px",
  margin: "10px"

  // fontFamily: "courier"
}

const linkStyle = {
  color: "black",
  letterSpacing: "0px",
  textAlign: "center",
  textDecoration: "none",
  border: "solid 2px",
  borderRadius: "3px",
  margin: "2px",
  padding: "1px"
}

Heading.propTypes = {}

export default Heading
