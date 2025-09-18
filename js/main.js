import { Screen } from "./screen.js";
import { Snake } from "./snake.js";

const GAME_SPEED = 100;
const screenElement = document.querySelector("#screen");
const screen = new Screen({
  element: screenElement,
  rows: 14,
  columns: 19,
  squareBgColor: "#9bba5a",
  foodBgColor: "#242424",
  squareSize: 8,
  gap: 2,
});
const snake = new Snake({ board: screen.board, bgColor: "#242424" });
let direction = "down";
let foodPosition = screen.createFood();
let score = 0;
let gameInterval;
screen.draw();
snake.draw();

let allowMove = true;
function gameTick() {
  snake.move({
    direction,
    foodPosition,
    onEat() {
      const snakePoints = snake.snake.toArray();
      screen.dropFood(foodPosition);
      foodPosition = screen.createFood(snakePoints);
      score++;
    },
  });
  allowMove = true;

  const isCollision = snake.checkIsCollision();
  if (isCollision) {
    clearInterval(gameInterval);
    alert(`Fim de jogo!\nPontuação: ${score}`);
    location.reload();
  }
}

window.addEventListener("keydown", (event) => {
  if (!allowMove) {
    return;
  }

  allowMove = !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
    event.key
  );
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

gameInterval = setInterval(gameTick, GAME_SPEED);
