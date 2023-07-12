import { Canvas } from "../components/Canvas";
import { Service, ServiceType } from "./Service";

type DrawServiceType = ServiceType & { canvas: Canvas };

export class DrawService extends Service {
  private canvas: Canvas;
  private fps: number = 1000 / 60;

  constructor({ objectsKeys, canvas }: DrawServiceType) {
    super({ objectsKeys });
    this.canvas = canvas;
  }

  execute(): void {
    setInterval(this.drawObjects, this.fps, this);
  }

  drawObjects(context: DrawService) {
    context.clearCanva(context);

    context.objects.forEach((obj) => {
      obj.object.create();
    });
  }

  clearCanva(context: DrawService) {
    context.canvas.reset();
  }
}
