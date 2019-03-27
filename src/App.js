import React, { Component } from "react";
import "./App.css";
//import Head from './Components/Head';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GroundContainer from "./Components/GroundContainer/GroundContainer";
//import LocationSearchInput from './Components/Search';
//import MyApp from './Components/Calendar';
import Form from "./Components/SignUpForm";
import { BrowserRouter as Router, Route} from "react-router-dom";
import GroundProfile from "./Components/GroundProfile";
//import MyClients from './Components/MyClients';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          {/* <GroundContainer/> */}
          <Route exact path="/" component={GroundContainer} />
          <Route path="/home"component={GroundContainer}/>
          <Route path="/sign-up" component={Form} />
          <Route exact path="/GroundProfile" component={GroundProfile} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
