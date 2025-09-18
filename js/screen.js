import { Square } from "./square.js";

export class Screen {
  constructor({
    element,
    columns = 12,
    rows = 12,
    squareSize = 24,
    gap = 4,
    squareBgColor = "black",
    foodBgColor = "blue",
  } = {}) {
    this.screen = element;
    this.foodBgColor = foodBgColor;
    this.squareBgColor = squareBgColor;
    this.screen.style.display = "grid";
    this.screen.style.gridTemplateRows = `repeat(${rows}, ${squareSize}px)`;
    this.screen.style.gridTemplateColumns = `repeat(${columns}, ${squareSize}px)`;
    this.screen.style.gap = `${gap}px`;

    this.board = new Array(rows).fill(null).map(() =>
      new Array(columns).fill(null).map(
        () =>
          new Square({
            element: document.createElement("div"),
            bgColor: this.squareBgColor,
            size: squareSize,
          })
      )
    );
  }

  draw() {
    this.board.flat().forEach((square) => square.draw(this.screen));
  }

  createFood(forbiddenPoints = []) {
    let row, column, isPositionUnavailable;
    do {
      row = Math.floor(Math.random() * this.board.length);
      column = Math.floor(Math.random() * this.board.at(0).length);

      isPositionUnavailable = forbiddenPoints.some(
        ([forbRow, forbCol]) => forbRow === row && forbCol === column
      );
    } while (isPositionUnavailable);
    this.board[row][column].setBgColor(this.foodBgColor);
    return [row, column];
  }

  dropFood([row, column]) {
    this.board[row][column].resetBgColor();
  }
}
