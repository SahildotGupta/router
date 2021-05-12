import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
