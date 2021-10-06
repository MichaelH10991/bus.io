import React, { useState, useEffect } from "react"

const RemoteBus = (props) => {
  const { atcocode } = props
  const [busses, setBusses] = useState([])
  const [errors, setErrors] = useState(false)
  const url = `http://localhost:8080/api/busses/${atcocode}`

  useEffect(() => {
    async function fetchBusses() {
      const res = await fetch(url)
      res
        .json()
        .then((res) => setBusses(res))
        .catch((e) => setErrors(e))
    }
    fetchBusses()
  }, [])
  console.log(busses)
  return (
    <>
      {busses.map((bus) => (
        <>
          <div>Bus number: {bus.bus_number}</div>
          {bus.departures.map((departure) => (
            <div>
              {departure.line} to {departure.direction} @ {departure.best_departure_estimate}
            </div>
          ))}
        </>
      ))}
    </>
  )
}

export default RemoteBus
