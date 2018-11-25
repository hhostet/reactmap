import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar";
import Map from "./Map";
import Marker from "./Marker"
//import StorePoints from './StorePoints.js';
//import Location from './Location.js';


class App extends Component {



  render() {

    return (
      <div className="App">

        <Sidebar/>
        <Map/>
        <Marker/>
      
      </div>
    );
  }
}

export default App;
