export class Square {
  constructor({ element, size = 24, bgColor = "black" } = {}) {
    this.square = element;
    this.square.style.width = `${size}px`;
    this.square.style.height = `${size}px`;
    this.square.style.backgroundColor = bgColor;
  }

  draw(screen) {
    screen.append(this.square);
  }
}
