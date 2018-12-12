import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import GitHubFinder from "./components/GitHubApi/GitHubFinder";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="">
            <GitHubFinder />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
