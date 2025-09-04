export class Screen {
  constructor({
    element,
    columns = 12,
    rows = 12,
    squareSize,
    squareBgColor,
  } = {}) {
    this.screen = element;
    this.screen.style.display = "grid";
    this.screen.style.gridTemplateRows = `repeat(${rows}, ${squareSize}px)`;
    this.screen.style.gridTemplateColumns = `repeat(${columns}, ${squareSize}px)`;
    this.screen.style.gap = "8px";
  }

  draw() {}
}
