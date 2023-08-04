import "./style.css";
import { Canvas } from "../src/components/Canvas";
import { GamerController } from "../src/controllers/GamerController";
import { Circle, Rect } from "../src/components/objects";
import { ObjectRepository } from "../src/repositorys/ObjectRepository";
import { MovementService } from "../src/services";
import { CallbackMovimentServiceType } from "../src/services/MovementService";

const appContainer = document.querySelector("#app") as HTMLDivElement;

const canvas = new Canvas({
  heigth: 600,
  width: 1000,
  container: appContainer,
});

const ball = new Circle({
  x: 350,
  y: 350,
  color: "#ff0000",
  radius: 50,
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

const gameController = new GamerController({
  canvas,
});

const movimentServiceCallback: CallbackMovimentServiceType = (
  event,
  objects
) => {
  const { key } = event;

  if (key == "ArrowLeft") {
    objects.forEach((obj) => {
      obj.object.x -= obj.object.speed;
    });
  }
  if (key == "ArrowUp") {
    objects.forEach((obj) => {
      obj.object.y -= obj.object.speed;
    });
  }
  if (key == "ArrowRight") {
    objects.forEach((obj) => {
      obj.object.x += obj.object.speed;
    });
  }
  if (key == "ArrowDown") {
    objects.forEach((obj) => {
      obj.object.y += obj.object.speed;
    });
  }
};

const movimentService = new MovementService({
  objectsKeys: ["ball"],
  event: "keydown",
  callback: movimentServiceCallback,
});

gameController.setService(movimentService);
gameController.createGame();
