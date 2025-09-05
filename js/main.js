import { Screen } from "./screen.js";

const screenElement = document.querySelector("#screen");
const screen = new Screen({ element: screenElement, rows: 12, columns: 12 });
screen.draw();

screen.board[0][0].setBgColor("pink");

setTimeout(() => {
  screen.board[0][0].resetBgColor();
}, 5000);
