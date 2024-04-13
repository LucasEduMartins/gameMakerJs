import RandomValues from "../../src/utils/RandomValues";
import CanvasAdpter from "../../src/core/adapters/CanvasAdapter";
import { Block } from "./core/models/Block.js";
import { Game } from "./core/models/Game";
import { Shape } from "./core/models/Shape.js";

const game = new Game(800, 600, new CanvasAdpter({ width: 800, height: 600 }));

const myShape = new Shape([
  new Block({
    name: "block",
    x: 20,
    y: 20,
    width: 20,
    height: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  }),
  new Block({
    name: "block2",
    x: 40,
    y: 20,
    width: 20,
    height: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  }),
]);

game.addShape(myShape);

//start the game
game.start();
