import React from "react"
import { connect } from "react-redux"
import { deleteBus } from "../actions/index"

/**
 * Definition for a single bus component
 * @param {Object} props 
 */
const ConnectedBus = (props) => {
    const { bus_number, country, county } = props.bus
    const style = bus_number % 2 === 0 ? blue : red

    function handleDelete(event) {
        event.preventDefault()
        const { _id } = props.bus
        props.deleteBus({ _id })
    }

    return (
        <div style={style}>
            <div style={header}>
                <h1>{bus_number}</h1>
            </div>
            <div style={content}>
            <div>
                <ul style={{ margin: "5px" }}>
                    <li><strong>{country}</strong></li>
                    <li>{county}</li>
                </ul>
            </div>
            <div>
                <ul style={{ margin: "5px" }}>
                    <li>thing</li>
                    <li>thing</li>
                </ul>
            </div>
            </div>
            <button onClick={handleDelete}></button>
        </div>
    )
}

const red = {
    borderStyle: "5px solid black",
    margin: "5px 5px",
    backgroundColor: "#ff5d5d",
    borderRadius: "10px"
}

const blue = {
    borderStyle: "2px solid #619ffd",
    margin: "5px 5px",
    backgroundColor: "rgb(97, 159, 253)",
    borderRadius: "10px"
}

const content = {
    display: "inline-flex",
    margin: "0px 5px",
    padding: "0px 5px 5px 5px"
}

const header = {
    margin: "0",
    padding: "10px 10px 0px 10px"
}

function mapDispatchToProps(dispatch) {
    return {
        deleteBus: id => dispatch(deleteBus(id))
    }
}

const Bus = connect(mapDispatchToProps, { deleteBus })(ConnectedBus)

export default Bus