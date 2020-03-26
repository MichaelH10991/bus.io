import React from 'react';
import Busses from "./js/components/Busses"
import Heading from "./js/components/Heading"
import Menu from "./js/components/Menu"
import Search from "./js/components/Search"
import Find from "./js/components/Find"
import About from "./js/components/About"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

const App = () => (
  <>
  <Router>
    <div style={container}>
      <Heading title={"bus.io"} />
      <Route exact path="/" render={props => (
        <React.Fragment>
          <Search />
          <Busses />
        </React.Fragment>
      )} />
      <Route path="/find" render={props => (
        <React.Fragment>
          <Search />
        </React.Fragment>
      )} />
      <Route path="/about" render={props => (
        <React.Fragment>
        <Search />
      </React.Fragment>
      )} />
    </div>
    </Router>
  </>
);

const container = {
  width: "80%",
  margin: "auto",
}

export default App;
