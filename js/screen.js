import { Square } from "./square.js";

export class Screen {
  constructor({
    element,
    columns = 12,
    rows = 12,
    squareSize = 24,
    gap = 4,
    squareBgColor = "black",
  } = {}) {
    this.screen = element;
    this.screen.style.display = "grid";
    this.screen.style.gridTemplateRows = `repeat(${rows}, ${squareSize}px)`;
    this.screen.style.gridTemplateColumns = `repeat(${columns}, ${squareSize}px)`;
    this.screen.style.gap = `${gap}px`;

    /*
    const square = new Square({
      element: document.createElement("div"),
      bgColor: squareBgColor,
      size: squareSize,
    });
    */

    this.board = new Array(rows).fill(null).map(() =>
      new Array(columns).fill(null).map(
        () =>
          new Square({
            element: document.createElement("div"),
            bgColor: squareBgColor,
            size: squareSize,
          })
      )
    );
  }

  draw() {
    this.board.flat().forEach((square) => square.draw(this.screen));
  }
}
