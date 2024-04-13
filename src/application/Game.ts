import { GenericObject } from "../core";
import { UIHandleObjectPort } from "../core/ports";

// export default class Game extends AbstractGame {
//   private uiHandleObjectPort: UIHandleObjectPort;
//   private inputHandleObjectPort: InputHandleObjectPort;
//   private objects: GenericObject[] = [];

//   constructor({
//     height,
//     width,
//     inputHandleObjectPort,
//     uiHandleObjectPort,
//   }: GamePropsType) {
//     if (!uiHandleObjectPort)
//       this.uiHandleObjectPort = new CanvasAdpter({
//         width,
//         height,
//       });

//     if (!inputHandleObjectPort)
//       this.inputHandleObjectPort = new KeyBoardEventListenerAdapter();

//     this.uiHandleObjectPort.createContainer();
//     this.setupInput();
//   }

//   private setDependencies() {}

//   addObject(object: GenericObject) {
//     this.objects.push(object);
//   }

//   removeObject(object: GenericObject) {
//     const index = this.objects.indexOf(object);
//     if (index !== -1) {
//       this.objects.splice(index, 1);
//     }
//   }

//   private update() {
//     for (const object of this.objects) {
//       object.update(this);
//     }
//   }

//   private render() {
//     this.uiHandleObjectPort.render(this.objects);
//   }

//   private setupInput() {
//     this.inputHandleObjectPort.addInputListener((e) => {
//       for (const object of this.objects) {
//         object.handleInput(e);
//       }
//     });
//   }

//   start() {
//     this.setDependencies();

//     const gameLoop = () => {
//       this.update();
//       this.render();
//       requestAnimationFrame(gameLoop);
//     };
//     gameLoop();
//   }

//   getContainer() {
//     return this.uiHandleObjectPort.getContainer();
//   }

//   getObjects() {
//     return this.objects;
//   }
// }
export abstract class AbstractGame {
  private objects: GenericObject[] = [];

  constructor(
    readonly width: number,
    readonly height: number,
    private uiHandleObjectPort: UIHandleObjectPort
  ) {
    uiHandleObjectPort.createContainer();
  }

  addObject(object: GenericObject) {
    this.objects.push(object);
  }

  private update() {
    for (const object of this.objects) {
      object.update(this);
    }
  }

  private render() {
    this.uiHandleObjectPort.render(this.objects);
  }

  getContainer() {
    return this.uiHandleObjectPort.getContainer();
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
