import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import AllTiles from "./routes/AllTiles";
import SingleTile from "./routes/SingleTile";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={AllTiles} />
      </div>
    </Router>
  );
};

export default App;
