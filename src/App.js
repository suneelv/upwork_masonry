import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import AllTiles from "./routes/AllTiles";
import SingleTile from "./routes/SingleTile";

const App = () => {
  const [tiles] = React.useState(getTiles);
  return (
    <Router>
      <div>
        <Route path="/" render={() => <AllTiles tiles={tiles} />} />
        <Route
          exact
          path="/:id"
          render={({ match: { params } }) => (
            <SingleTile id={params.id} tiles={tiles} />
          )}
        />
      </div>
    </Router>
  );
};

export default App;

function getTiles() {
  let tiles = [];
  for (let i = 0; i < 30; i++) {
    const color = getRandomColor();
    const height = getRandomHeight();

    tiles.push({
      id: i.toString(),
      color,
      height
    });
  }

  return tiles;
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const minHeight = 100;
const maxHeight = 300;

function getRandomHeight() {
  return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
}
