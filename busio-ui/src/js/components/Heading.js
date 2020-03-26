import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Heading = props => {
    const { title } = props
    return (
        <>
        <div style={heading}>
            <h1>{title}</h1>
            <div>
            <Link style={linkStyle} to="/">Saved</Link>
            <Link style={linkStyle} to='/find'>Find</Link>
            <Link style={linkStyle} to='/about'>About</Link>
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
    textDecoration: 'none',
    border: "solid 2px",
    borderRadius: "3px",
    margin: "2px",
    padding: "1px"
  }

Heading.propTypes = {

}

export default Heading
