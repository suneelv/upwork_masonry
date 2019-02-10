// @ts-check
import React from "react";
import { Link, Redirect } from "react-router-dom";

const SingleTile = ({ id, tiles = [] }) => {
  const tile = tiles.find(tile => tile.id === id);

  React.useEffect(() => {
    document.body.classList.add("hideOverflow");

    return () => {
      document.body.classList.remove("hideOverflow");
    };
  });

  if (!tile) {
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  } else {
    return (
      <div
        data-testid="tile-element"
        className="singleTileRoute"
        style={{ backgroundColor: tile.color, width: "100vw", height: "100vh" }}
      >
        <Link to="/" className="tileLink" />
      </div>
    );
  }
};

export default SingleTile;
