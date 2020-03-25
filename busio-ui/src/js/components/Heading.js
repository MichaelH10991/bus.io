import React from 'react'
import PropTypes from 'prop-types'

const Heading = props => {
    const { title } = props
    return (
        <div style={heading}>
            <h1>{title}</h1>
        </div>
    )
}

const heading = {
    textAlign: "center",
    letterSpacing: "10px"
    // fontFamily: "courier"
}

Heading.propTypes = {

}

export default Heading
