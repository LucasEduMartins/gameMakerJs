import { GenericObject } from "../core/model";
import { InputHandleObjectPort, UIHandleObjectPort } from "../core/ports";
import { GamePropsType } from "./types";

export default class Game {
  private uiHandleObjectPort: UIHandleObjectPort;
  private inputHandleObjectPort: InputHandleObjectPort;
  private objects: GenericObject[] = [];

  constructor(private props: GamePropsType) {
    this.uiHandleObjectPort.createContainer();
    this.setupInput();
  }

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
      object.update();
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
    const gameLoop = () => {
      this.update();
      this.render();
      requestAnimationFrame(gameLoop);
    };
    gameLoop();
  }
}
