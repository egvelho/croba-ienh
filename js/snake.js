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
    let nextHeadPosition = structuredClone(headPosition);
    switch (direction) {
      case "up":
        nextHeadPosition[0]--;
        break;
      case "down":
        nextHeadPosition[0]++;
        break;
      case "left":
        nextHeadPosition[1]--;
        break;
      case "right":
        nextHeadPosition[1]++;
        break;
      default:
        throw new Error(`The direction "${direction}" is invalid!`);
    }

    const [headRow, headColumn] = headPosition;
    const [nextHeadRow, nextHeadColumn] = nextHeadPosition;
    this.snake.head.value = nextHeadPosition;
    this.board[headRow][headColumn].resetBgColor();
    this.board[nextHeadRow][nextHeadColumn].setBgColor("red");
  }
}
