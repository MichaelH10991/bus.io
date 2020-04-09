import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { About, Bus, Busses, Find, Heading, Menu, BusStop, Search } from "./js/components/index"
import "./App.css"

const App = () => (
  <>
    <Router>
      <div style={container}>
        <Heading title={"bus.io"} />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Search />
              <Busses />
            </React.Fragment>
          )}
        />
        <Route
          path="/find"
          render={(props) => (
            <React.Fragment>
              <Search />
              <Find />
            </React.Fragment>
          )}
        />
        <Route
          path="/about"
          render={(props) => (
            <React.Fragment>
              <Search />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  </>
)

const container = {
  width: "80%",
  margin: "auto",
}

export default App
