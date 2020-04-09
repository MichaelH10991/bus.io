import React, { Component, useState } from "react"
import PropTypes from "prop-types"

const Search = (props) => {
  const [search, setSearch] = useState("")

  function handleChange(e) {
    setSearch({ value: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert("searching for: ", search.value)
    // send to api
  }

  return (
    <div style={container}>
      <input type="text" placeholder={"Search..."} onChange={handleChange} style={searchBar} />
      <button type="submit" onClick={handleSubmit} style={searchButton}>
        Go!
      </button>
    </div>
  )
}

// class Search extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { value: "" }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value })
//   }

//   handleSubmit(event) {
//     this.event.preventDefault()
//     alert("A name was submitted: " + this.state.value)
//   }

//   render() {
//     return (
//       <div style={container}>
//         <input type="text" placeholder={"Search..."} onChange={this.handleChange} style={search} />
//       </div>
//     )
//   }
// }

const container = {
  padding: "0px 10px",
  display: "flex",
  width: "70%",
  margin: "auto",
}

const searchBar = {
  width: "75%",
  borderRadius: "20px",
  height: "25px",
  background: "rgb(212, 212, 212)",
  color: "rgb(51, 51, 51)",
  border: "1px solid rgb(197, 197, 197)",
  display: "flex",
  margin: "auto",
  padding: "0px 5px",
  flex: "1 1 0",
  borderBottomRightRadius: "0px",
  borderTopRightRadius: "0px",
}

const searchButton = {
  borderBottomRightRadius: "50px",
  borderTopRightRadius: "50px",
  background: "rgb(126, 224, 139)",
  color: "rgb(51, 51, 51)",
  border: "1px solid rgb(197, 197, 197)",
  width: "60px",
}

Search.propTypes = {}

export default Search
