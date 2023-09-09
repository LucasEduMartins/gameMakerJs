import { Canvas } from "../components";
import { Circle, GenericObject } from "../components/objects";
import { GamerController } from "../controllers";
import { ISubject } from "../observers/IObserver";
import { ObjectRepositoryType } from "../repositorys/ObjectRepository";

import { Service, ServiceType } from "./Service";

export type CallbackColisionServiceType = (
  objects: ObjectRepositoryType[]
) => void;

export type ColisionServiceType = ServiceType & {
  canvasColision: boolean;
  callback: CallbackColisionServiceType;
};

export type IsCollidedPropsType = {
  canvas: Canvas;
  object1: GenericObject;
  object2?: GenericObject;
};

export class ColisionService extends Service {
  private callback: CallbackColisionServiceType;
  private canvasColision: boolean;

  constructor({
    objectsKeys,
    callback,
    canvasColision = false,
  }: ColisionServiceType) {
    super({ objectsKeys });
    this.callback = callback;
    this.canvasColision = canvasColision;
  }

  update(subject: ISubject): void {
    // if (subject instanceof MovementService) {
    // }
    // if (subject instanceof DrawService) {
    //   const allowObjects = (subject as DrawService).objects.filter((e) =>
    //     this.objects.includes(e)
    //   );
    //   this.objects = allowObjects as ObjectRepositoryType[];
    //   this.execute();
    // }
  }

  execute(gameController: GamerController): void {
    const canvas = gameController.getCanvas();
    this.objects.map((e) => {
      const object1 = Object.assign({}, e.object);

      if (e.object instanceof Circle) {
        object1.x -= object1.width;
        object1.width *= 2;
        object1.height *= 2;
      }

      this.objects.map((f) => {
        const object2 = Object.assign({}, f.object);
        if (e.key != f.key) {
          if (f.object instanceof Circle) {
            object2.x -= object2.width;
            object2.width *= 2;
            object2.height *= 2;
          }

          if (this.isCollided({ canvas, object1, object2 })) {
            this.callback(this.objects);
          }
        }
      });

      if (this.canvasColision) {
        if (this.isCollided({ canvas, object1 })) {
          this.callback(this.objects);
        }
      }
    });
  }

  isCollided({ canvas, object1, object2 }: IsCollidedPropsType): boolean {
    if (this.canvasColision) {
      return (
        object1.x + object1.width > canvas.width ||
        object1.x < 0 ||
        object1.y + object1.height > +canvas.height ||
        object1.y < 0
      );
    }
    if (object2)
      return (
        object1.x < object2.x + object2.width &&
        object1.x + object1.width > object2.x &&
        object1.y < object2.y + object2.height &&
        object1.y + object1.height > object2.y
      );
    return false;
  }
}
