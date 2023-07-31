import { Canvas } from "../components/Canvas";
import { Observer, Subject } from "../observers/IObserver";
import { Service, ServiceType } from "./Service";

type DrawServiceType = ServiceType & { canvas: Canvas };

export class DrawService extends Service implements Subject {
  private canvas: Canvas;
  private fps: number = 1000 / 60;
  private observers: Observer[] = [];

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
    context.notify();
  }

  clearCanva(context: DrawService) {
    context.canvas.reset();
  }

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Subject: Observer has been attached already.");
    }

    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
    }

    this.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}
