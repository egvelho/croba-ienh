import { Square } from "./square.js";

const screenElement = document.querySelector("#screen");
const squareElement = document.createElement("div");
const square = new Square({
  element: squareElement,
  size: 128,
  bgColor: "pink",
});

square.draw(screenElement);
