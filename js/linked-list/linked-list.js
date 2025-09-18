import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    this.size++;
    let nextNode = new Node(value);

    if (this.head === null) {
      this.head = nextNode;
      return;
    }

    let latestNode = this.head;
    while (latestNode.next !== null) {
      latestNode = latestNode.next;
    }
    latestNode.next = nextNode;
  }

  popPop() {
    let nodes = [];
    let latestNode = this.head;

    if (latestNode === null) {
      return;
    } else if (latestNode.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    }

    while (latestNode.next !== null) {
      nodes.push(latestNode);
      latestNode = latestNode.next;
    }

    const value = nodes.at(-1).value;
    nodes.at(-2).next = null;
    return value;
  }

  pop() {
    let latestNode = this.head;

    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    }

    while (latestNode.next.next !== null) {
      latestNode = latestNode.next;
    }

    const value = latestNode.next.value;
    latestNode.next = null;
    return value;
  }

  print() {
    let valuesToPrint = "";
    let latestNode = this.head;
    while (latestNode !== null) {
      const comma = latestNode.next ? ", " : "";
      valuesToPrint += `${latestNode.value}${comma}`;
      latestNode = latestNode.next;
    }
    console.log(valuesToPrint);
  }

  toArray() {
    let nodes = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
