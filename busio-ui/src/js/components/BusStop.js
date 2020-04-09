import React from "react"
import { connect } from "react-redux"
import { saveBus } from "../actions/index"

/**
 * Definition for a single bus component
 * @param {Object} props
 */
const ConnectedBusStop = (props) => {
  // const { bus_number, country, county } = props.bus
  const { name, description, atcocode } = props.stop

  const cardStyle = {
    borderStyle: "5px solid black",
    margin: "5px 5px",
    backgroundColor: "rgb(183, 177, 177)",
    borderRadius: "10px",
    position: "relative",
    border: "3px solid #949494",
    padding: "5px",
  }

  const handleSave = (event) => {
    event.preventDefault()
    props.saveBus("http://localhost:8080/api/busses/", props.bus)
  }

  return (
    <div style={cardStyle}>
      <div>
        <div className={"cardHeading"}>
          {/* <h1>{bus_number}</h1> */}
          <h1>{name}</h1>
        </div>
        <div className={"cardContent"}>
          <div>
            <ul>
              <li>{description}</li>
              <li>{atcocode}</li>
              <li>{/* <strong>{country}</strong> */}</li>
              {/* <li>{county}</li> */}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {/* <li>thing</li> */}
          {/* <li>thing</li> */}
        </ul>
      </div>
      {/* <button onClick={handleSave}>save</button> */}
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    saveBus: (bus) => dispatch(saveBus(bus)),
  }
}

const BusStop = connect(mapDispatchToProps, { saveBus })(ConnectedBusStop)

export default BusStop
