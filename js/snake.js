import { LinkedList } from "./linked-list/linked-list.js";

export class Snake {
  constructor({ board, headPosition = [0, 0] }) {
    this.snake = new LinkedList();
    this.snake.add(headPosition);
  }

  draw() {
    let currentNode = this.snake.head;
    while (currentNode !== null) {
      const [row, column] = currentNode.value;
      console.log(row, column);
      currentNode = currentNode.next;
    }
  }
}
