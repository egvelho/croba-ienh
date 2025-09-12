import { Screen } from "./screen.js";
import { Snake } from "./snake.js";

const GAME_SPEED = 200;
const screenElement = document.querySelector("#screen");
const screen = new Screen({ element: screenElement, rows: 12, columns: 12 });
const snake = new Snake({ board: screen.board });
let direction = "down";
screen.draw();
snake.draw();

function gameTick() {
  snake.move(direction);
}

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
  }
});

setInterval(gameTick, GAME_SPEED);
