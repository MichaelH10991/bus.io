import React from "react"

/**
 * Definition for a single bus component
 * @param {Object} props 
 */
const Bus = (props) => {
    const { bus_number, country, county } = props.bus
    const style = bus_number % 2 === 0 ? blue : red 
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

export default Bus