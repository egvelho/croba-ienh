import { LinkedList } from "./linked-list/linked-list.js";

export class Snake {
  constructor({ board, headPosition = [0, 0], bgColor = "red" }) {
    this.board = board;
    this.snake = new LinkedList();
    this.bgColor = bgColor;
    this.snake.add([4, 0]);
    this.snake.add([3, 0]);
    this.snake.add([2, 0]);
    this.snake.add([1, 0]);
    this.snake.add([0, 0]);
  }

  draw() {
    if (this.checkIsCollision()) {
      return;
    }

    let currentNode = this.snake.head;
    while (currentNode !== null) {
      const [row, column] = currentNode.value;
      this.board[row][column].setBgColor(this.bgColor);
      currentNode = currentNode.next;
    }
  }

  checkIsCollision() {
    let segs = [];
    let currentNode = this.snake.head;
    while (currentNode !== null) {
      segs.push(currentNode.value);
      currentNode = currentNode.next;
    }

    const isCollision = segs.some((segA, indexA) =>
      segs.some(
        (segB, indexB) =>
          indexA !== indexB && segA[0] === segB[0] && segA[1] === segB[1]
      )
    );

    const topOff = 0;
    const bottomOff = this.board.at(0).length - 1;
    const leftOff = 0;
    const rightOff = this.board.length - 1;

    const isWallCrash = segs.some(
      ([row, column]) =>
        row < leftOff || row > rightOff || column < topOff || column > bottomOff
    );

    return isCollision || isWallCrash;
  }

  move({ direction, foodPosition, onEat }) {
    if (this.checkIsCollision()) {
      return;
    }

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
        if (direction === "left") return;
        nextHeadPosition[1]++;
        break;
      default:
        throw new Error(`The direction "${direction}" is invalid!`);
    }

    const [headRow, headColumn] = headPosition;
    this.snake.head.value = nextHeadPosition;
    this.board[headRow][headColumn].resetBgColor();

    let currentNode = this.snake.head.next;
    let previousNodePosition = structuredClone(headPosition);
    while (currentNode !== null) {
      const currentNodePosition = structuredClone(currentNode.value);
      currentNode.value = previousNodePosition;
      previousNodePosition = currentNodePosition;
      const [previousRow, previousColumn] = previousNodePosition;
      this.board[previousRow][previousColumn].resetBgColor();
      currentNode = currentNode.next;
    }

    if (
      nextHeadPosition[0] === foodPosition[0] &&
      nextHeadPosition[1] === foodPosition[1]
    ) {
      this.snake.add(previousNodePosition);
      onEat();
    }

    this.draw();
  }
}
