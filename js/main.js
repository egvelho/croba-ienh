import { Square } from "./square.js";
import { Screen } from "./screen.js";

const screenElement = document.querySelector("#screen");
const screen = new Screen({ element: screenElement, rows: 2, columns: 4 });

const squareA = new Square({ element: document.createElement("div") });
const squareB = new Square({ element: document.createElement("div") });
const squareC = new Square({ element: document.createElement("div") });
const squareD = new Square({ element: document.createElement("div") });
const squareE = new Square({ element: document.createElement("div") });
const squareF = new Square({ element: document.createElement("div") });

squareA.draw(screenElement);
squareB.draw(screenElement);
squareC.draw(screenElement);
squareD.draw(screenElement);
squareE.draw(screenElement);
squareF.draw(screenElement);
