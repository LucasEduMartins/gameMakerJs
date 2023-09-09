import { CanvasAdpter, KeyBoardEventListenerAdapter } from "../core/adapters";
import { GenericObject } from "../core/model";
import { InputHandleObjectPort, UIHandleObjectPort } from "../core/ports";
import { GamePropsType } from "./types";

export default class Game {
  private uiHandleObjectPort: UIHandleObjectPort;
  private inputHandleObjectPort: InputHandleObjectPort;
  private objects: GenericObject[] = [];

  constructor({
    height,
    width,
    inputHandleObjectPort,
    uiHandleObjectPort,
  }: GamePropsType) {
    if (!uiHandleObjectPort)
      this.uiHandleObjectPort = new CanvasAdpter({
        width,
        height,
      });

    if (!inputHandleObjectPort)
      this.inputHandleObjectPort = new KeyBoardEventListenerAdapter();

    this.uiHandleObjectPort.createContainer();
    this.setupInput();
  }

  private setDependencies() {}

  addObject(object: GenericObject) {
    this.objects.push(object);
  }

  removeObject(object: GenericObject) {
    const index = this.objects.indexOf(object);
    if (index !== -1) {
      this.objects.splice(index, 1);
    }
  }

  private update() {
    for (const object of this.objects) {
      object.update(this);
    }
  }

  private render() {
    this.uiHandleObjectPort.render(this.objects);
  }

  private setupInput() {
    this.inputHandleObjectPort.addInputListener((e) => {
      for (const object of this.objects) {
        object.handleInput(e);
      }
    });
  }

  start() {
    this.setDependencies();

    const gameLoop = () => {
      this.update();
      this.render();
      requestAnimationFrame(gameLoop);
    };
    gameLoop();
  }

  getContainer() {
    return this.uiHandleObjectPort.getContainer();
  }

  getObjects() {
    return this.objects;
  }
}
