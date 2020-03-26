
import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import Bus from "./Bus"

export class Busses extends Component {
  componentDidMount() {
    this.props.getData("http://localhost:8080/api/busses/");
  }

  render() {
    return (
      <div >
        {this.props.busses.map(bus => (
          // <li key={el._id}>{el.bus_number}, {el.country}, {el.county}, {el.date_created}</li>
          <Bus key={bus._id} bus={bus}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    busses: state.remoteBusses.slice(0, 10)
  };
}

export default connect(mapStateToProps, { getData })(Busses);