import React, { Component } from "react"
import { connect } from "react-redux"
import { getRemoteData, cleanUpRemote } from "../actions/index"
import Bus from "./Bus"
import RemoteBus from "./RemoteBus"

export class ConnectedFind extends Component {
  componentDidMount() {
    this.props.getRemoteData("http://localhost:8080/api/busses/")
  }
  componentWillUnmount() {
    this.props.cleanUpRemote()
  }
  render() {
    return (
      <div>
        {this.props.busses.map(bus => (
          <RemoteBus bus={bus} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    busses: state.remoteBusses.slice(0, 10)
  }
}

const Find = connect(mapStateToProps, { getRemoteData, cleanUpRemote })(ConnectedFind)

export default Find
