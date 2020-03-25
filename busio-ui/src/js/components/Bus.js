import React from "react"
/**
 * Definition for a single bus component
 * @param {Object} props 
 */
function Bus (props) {
    const { _id, bus_number, country, county } = props.bus
    return (
        <div  style={style}>
            <div style={header}>
                <h1>{bus_number}</h1>
            </div>
            <div style={content}>
                <p>{country}</p>
                <p>{county}</p>
            </div>
        </div>
    )
}


const style = {
    margin: "5px 5px",
    backgroundColor: "red"
}
const h1 = {
    margin: "0",
    padding: "5px"
}

const content = {
    margin: "0",
    padding: "5px"
}

const header = {
    margin: "0",
    padding: "5px"
}

export default Bus