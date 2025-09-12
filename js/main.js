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
      if (direction === "down") return;
      direction = "up";
      break;
    case "ArrowDown":
      if (direction === "up") return;
      direction = "down";
      break;
    case "ArrowLeft":
      if (direction === "right") return;
      direction = "left";
      break;
    case "ArrowRight":
      if (direction === "left") return;
      direction = "right";
      break;
  }
});

setInterval(gameTick, GAME_SPEED);
