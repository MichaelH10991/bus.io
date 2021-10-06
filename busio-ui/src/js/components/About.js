import React, { useState, useEffect } from "react"

const About = () => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState(false)

  const url = "http://localhost:8080/api/ping"

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      res
        .json()
        .then((res) => setData(res))
        .catch((e) => setErrors(e))
    }
    fetchData()
  }, [])
  return (
    <div style={{ textAlign: "center" }}>
      <div>{data.api_status}</div>
      <div>{data.version}</div>
    </div>
  )
}

export default About
