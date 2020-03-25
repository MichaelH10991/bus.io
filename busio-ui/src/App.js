import React from 'react';
import Busses from "./js/components/Busses"
import Heading from "./js/components/Heading"
import Menu from "./js/components/Menu"
import Search from "./js/components/Search"
import './App.css';

const App = () => (
  <>
    <div style={container}>
      <Heading title={"bus.io"} />
      <Search />
      <Busses />
    </div>
  </>
);

const container = {
  width: "80%",
  margin: "auto",
}

export default App;
