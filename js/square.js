export class Square {
  constructor({ element, size = 24, bgColor = "black" } = {}) {
    this.DEFAULT_BG_COLOR = bgColor;
    this.square = element;
    this.square.style.width = `${size}px`;
    this.square.style.height = `${size}px`;
    this.square.style.backgroundColor = bgColor;
  }

  draw(screen) {
    screen.append(this.square);
  }

  resetBgColor() {
    this.square.style.backgroundColor = this.DEFAULT_BG_COLOR;
  }

  setBgColor(bgColor) {
    this.square.style.backgroundColor = bgColor;
  }
}
