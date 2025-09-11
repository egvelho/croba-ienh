import { Screen } from "./screen.js";
import { Snake } from "./snake.js";

const screenElement = document.querySelector("#screen");
const screen = new Screen({ element: screenElement, rows: 12, columns: 12 });
const snake = new Snake({ board: screen.board });
screen.draw();
snake.draw();
snake.move("right");
