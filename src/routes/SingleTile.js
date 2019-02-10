// @ts-check
import React from "react";
import { Link } from "react-router-dom";

const SingleTile = ({ id, tiles = [] }) => {
  const tile = tiles.find(tile => tile.id === id);

  React.useEffect(() => {
    document.body.classList.add("hideOverflow");

    return () => {
      document.body.classList.remove("hideOverflow");
    };
  });

  if (!tile) {
    return null;
  } else {
    return (
      <div
        className="singleTileRoute"
        style={{ backgroundColor: tile.color, width: "100vw", height: "100vh" }}
      >
        <Link to="/" className="tileLink" />
      </div>
    );
  }
};

export default SingleTile;
