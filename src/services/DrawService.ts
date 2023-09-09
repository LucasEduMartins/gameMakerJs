import { Canvas } from "../components";
import { GamerController } from "../controllers";
import { ISubject } from "../observers/IObserver";
import { Service, ServiceType } from "./Service";

type DrawServiceType = ServiceType;

export class DrawService extends Service {
  constructor(props?: DrawServiceType) {
    super(props || {});
  }

  execute(gameController: GamerController): void {
    // setInterval(this.drawObjects, this.fps, this);
    const canvas = gameController.getCanvas();
    this.clearCanva(canvas);

    this.objects.forEach(({ object }) => {
      object.render({ context: canvas.getContext() });
    });
  }

  clearCanva(canvas: Canvas) {
    canvas.reset();
  }

  update(subject: ISubject) {
    throw new Error("Method not implemented.");
  }
}
