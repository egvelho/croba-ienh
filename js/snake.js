import { LinkedList } from "./linked-list/linked-list.js";

export class Snake {
  constructor({ board, headPosition = [0, 0] }) {
    this.board = board;
    this.snake = new LinkedList();
    this.snake.add(headPosition);
  }

  draw() {
    let currentNode = this.snake.head;
    while (currentNode !== null) {
      const [row, column] = currentNode.value;
      console.log(row, column);
      this.board[row][column].setBgColor("red");
      currentNode = currentNode.next;
    }
  }

  move(direction) {
    const headPosition = structuredClone(this.snake.head.value);
    switch (direction) {
      case "up":
        break;
      case "down":
        break;
      case "left":
        break;
      case "right":
        break;
      default:
        throw new Error(`The direction "${direction}" is invalid!`);
    }
  }
}
