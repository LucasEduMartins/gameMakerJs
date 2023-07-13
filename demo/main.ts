import "./style.css";
import { Canvas } from "../src/components/Canvas";
import { GamerController } from "../src/controllers/GamerController";
import { Circle } from "../src/components/objects/Circle";
import { Rect } from "../src/components/objects/Rect";
import { MoveObjectsService } from "../src/services/MoveObjectsService";
import { DrawService } from "../src/services/DrawService";
import { ObjectRepository } from "../src/repositorys/ObjectRepository";
import { ColisionService } from "../src/services";

const appContainer = document.querySelector<HTMLDivElement>("#app");

const canvas = new Canvas({
  heigth: 600,
  width: 1000,
  container: appContainer,
});

const gameController = new GamerController({
  canvas,
});

const ball = new Circle({
  x: 50,
  y: 50,
  color: "#ff0000",
  height: 50,
  width: 50,
  canvas,
});

const bar = new Rect({
  x: 150,
  y: 150,
  color: "#ededed",
  height: 50,
  width: 150,
  speed: 20,
  canvas,
});

const objectRepository = ObjectRepository.getInstance();
objectRepository.save("ball", ball);
objectRepository.save("bar", bar);

const drawService = new DrawService({
  canvas,
});

const moveObjectsService = new MoveObjectsService({
  objectsKeys: ["bar"],
});

const colisionService = new ColisionService({
  objectsKeys: ["ball", "bar"],
  eventName: "teste",
  callback: () => {
    bar.x;
  },
});
gameController.setService(drawService);
gameController.setService(moveObjectsService);

gameController.createGame();