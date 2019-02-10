import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup } from "react-testing-library";

import SingleTile from "../SingleTile";

describe("SingleTile", () => {
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

  it("should render correct background color", () => {
    let wrapper = render(
      <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
        <SingleTile id={"2"} tiles={tiles} />
      </Router>
    );

    expect(wrapper.getByTestId("tile-element").style.backgroundColor).toEqual(
      "red"
    );
  });

  it("should render link to home page", () => {
    let wrapper = render(
      <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
        <SingleTile id={"2"} tiles={tiles} />
      </Router>
    );

    let anchorTag = wrapper.container.querySelector("a");

    expect(anchorTag.getAttribute("href")).toEqual("/");
  });
});
