// @ts-check
import React from "react";
import { useWindowSize } from "./useWindowSize";

function getTiles() {
  let tiles = [];
  for (let i = 0; i < 30; i++) {
    const color = getRandomColor();
    const height = getRandomHeight();

    tiles.push({
      id: i,
      color,
      height
    });
  }

  return tiles;
}

const AllTiles = () => {
  const [tiles, setTiles] = React.useState(getTiles);

  const { width, height } = useWindowSize();

  const columnCount = Math.floor(width / (200 + 16));

  return (
    <div>
      <ul className="tileList" style={{ columnCount }}>
        {tiles.map(tile => (
          <SingleTile key={tile.id} color={tile.color} height={tile.height} />
        ))}
      </ul>
    </div>
  );
};

const SingleTile = ({ height, color }) => {
  return (
    <li className="tileList__item" style={{ height, backgroundColor: color }} />
  );
};

export default AllTiles;

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
