import React, { Component } from "react"
import { connect } from "react-redux"
import { getData, cleanUpState } from "../actions/index"
import Bus from "./Bus"

export class Busses extends Component {
  componentDidMount() {
    this.props.getData("http://localhost:8080/api/saved/")
  }
  componentWillUnmount() {
    this.props.cleanUpState()
  }

  render() {
    return (
      <div>
        {this.props.busses.map((bus) => (
          <Bus key={bus._id} bus={bus} />
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    busses: state.savedBusses.slice(0, 10),
  }
}

export default connect(mapStateToProps, { getData, cleanUpState })(Busses)
