import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        this.event.preventDefault()
      }

    render() {
        return(
            <div style={container}>
                <input type="text" value={"Search"} onChange={this.handleChange} style={search} />
            </div>
        )
    }
}

const container = {
    padding: "0px 10px"
}

const search = {
    width: "75%",
    borderRadius: "20px",
    height: "25px",
    background: "rgb(212, 212, 212)",
    color: "rgb(51, 51, 51)",
    border: "1px solid rgb(197, 197, 197)",
    display: "flex",
    margin: "auto",
    padding: "0px 5px"
}

Search.propTypes = {

}

export default Search
