import React, { Component } from "react"
import { connect } from "react-redux"
import { getRemoteData, cleanUpRemote } from "../actions/index"
import BusStop from "./BusStop"

export class ConnectedFind extends Component {
  componentDidMount() {
    this.props.getRemoteData("http://localhost:8080/api/places/")
  }
  componentWillUnmount() {
    this.props.cleanUpRemote()
  }

  render() {
    return (
      <div>
        {this.props.stops.map((stop) => (
          <BusStop stop={stop} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stops: state.remoteBusses.slice(0, 1),
  }
}

const Find = connect(mapStateToProps, { getRemoteData, cleanUpRemote })(ConnectedFind)

export default Find
