// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "./useWindowSize";

const AllTiles = ({ tiles }) => {
  const { width, height } = useWindowSize();

  const columnCount = Math.floor(width / (200 + 16));

  const maxWidth = columnCount * (200 + 16);

  return (
    <div>
      <ul className="tileList" style={{ maxWidth, columnCount }}>
        {tiles.map(tile => (
          <SingleTile
            key={tile.id}
            id={tile.id}
            color={tile.color}
            height={tile.height}
          />
        ))}
      </ul>
    </div>
  );
};

const SingleTile = ({ id, height, color }) => {
  return (
    <li className="tileList__item" style={{ height, backgroundColor: color }}>
      <Link to={`/${id}`} />
    </li>
  );
};

export default AllTiles;
