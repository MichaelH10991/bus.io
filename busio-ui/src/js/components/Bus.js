import React from "react"
import { connect } from "react-redux"
import { deleteBus } from "../actions/index"

/**
 * Definition for a single bus component
 * @param {Object} props 
 */
const ConnectedBus = (props) => {

    const { bus_number, country, county } = props.bus

    const cardStyle = {
        borderStyle: "5px solid black",
        margin: "5px 5px",
        backgroundColor: bus_number % 2 === 0 ? "rgb(97, 159, 253)" : "#ff5d5d",
        borderRadius: "10px",
        position: "relative"
    }

    function handleDelete(event) {
        event.preventDefault()
        const { _id } = props.bus
        props.deleteBus({ _id })
    }

    return (
        <div style={cardStyle}>
            <button className={"cardButton"} onClick={handleDelete}>x</button>
            <div>
            <div className={"cardHeading"}>
                <h1>{bus_number}</h1>
            </div>
            <div className={"cardContent"}>
            <div>
                <ul>
                    <li><strong>{country}</strong></li>
                    <li>{county}</li>
                </ul>
            </div>
            </div>
            </div>
            <div>
            <ul>
                <li>thing</li>
                <li>thing</li>
            </ul>
        </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        deleteBus: id => dispatch(deleteBus(id))
    }
}

const Bus = connect(mapDispatchToProps, { deleteBus })(ConnectedBus)

export default Bus