import { Screen } from "./screen.js";

const screenElement = document.querySelector("#screen");
const screen = new Screen({ element: screenElement, rows: 2, columns: 4 });
screen.draw();
