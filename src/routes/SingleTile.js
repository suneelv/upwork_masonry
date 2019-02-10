// @ts-check
import React from "react";

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
        Single Title
      </div>
    );
  }
};

export default SingleTile;
