import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Service from "./components/pages/inc/Service";
import Navbar from "./components/pages/Navbar";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path='/services'>
            <Service />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
