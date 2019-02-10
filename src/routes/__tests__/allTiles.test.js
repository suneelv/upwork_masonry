import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup } from "react-testing-library";

import AllTiles from "../AllTiles";

describe("AllTilesView", () => {
  afterEach(cleanup);

  let tiles = [];

  beforeEach(() => {
    tiles = [
      { id: "1", color: "white", height: 100 },
      { id: "2", color: "red", height: 150 },
      { id: "3", color: "yellow", height: 200 },
      { id: "4", color: "black", height: 250 }
    ];
  });

  it("should render without errors", () => {
    let wrapper = render(
      <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
        <AllTiles tiles={[{ id: "1", height: 100, color: "white" }]} />
      </Router>
    );

    expect(wrapper).not.toBeNull();
  });

  it("should proper links inside all tiles", () => {
    let wrapper = render(
      <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
        <AllTiles tiles={tiles} />
      </Router>
    );

    let allLinks = wrapper.container.querySelectorAll("a");

    let allPaths = Array.from(allLinks).map(link => link.getAttribute("href"));

    expect(allPaths).toEqual(tiles.map(link => `/open/${link.id}`));
  });

  it("should render styles from tiles", () => {
    let wrapper = render(
      <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
        <AllTiles tiles={tiles} />
      </Router>
    );

    let domTiles = wrapper.container.querySelectorAll("li");

    let styles = Array.from(domTiles).map(domTile => ({
      height: domTile.style.height,
      color: domTile.style.backgroundColor
    }));

    expect(styles).toEqual(
      tiles.map(tile => ({ height: `${tile.height}px`, color: tile.color }))
    );
  });
});
