import { Screen } from "./screen.js";

const screenElement = document.querySelector("#screen");
const screen = new Screen({ element: screenElement, rows: 12, columns: 12 });
screen.draw();
