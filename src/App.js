import React, { Component } from "react";
import "./App.css";

import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer"
import GroundContainer from "./Components/GroundContainer/GroundContainer";
import SignUpForm from "../src/Components/SignUpForm/SignUpForm";
import { BrowserRouter as Router, Route} from "react-router-dom";
import GroundProfile from "../src/Components/GroundProfile/GroundProfile";
import Spiner from '../src/Components/Spiner/Spiner'
import About from "./Components/About/About";
//import MyClients from './Components/MyClients';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={GroundContainer} />
          <Route path="/home"component={GroundContainer}/>
          <Route path="/sign-up" component={SignUpForm} />
          <Route exact path="/GroundProfile" component={GroundProfile} />
          <Route exact path="/about" component={About} />
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default Spiner (App);
