import { Circle } from "../components/objects";
import { Observer, Subject } from "../observers/IObserver";
import { ObjectRepositoryType } from "../repositorys/ObjectRepository";
import { DrawService } from "./DrawService";
import { Service, ServiceType } from "./Service";

export type ColisionServiceType = ServiceType;

export class ColisionService extends Service implements Observer, Subject {
  private observers: Observer[] = [];

  constructor({ objectsKeys }: ColisionServiceType) {
    super({ objectsKeys });
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

  update(subject: Subject): void {
    if (subject instanceof DrawService) {
      const allowObjects = (subject as DrawService).objects
        .map((e) => {
          if (this.objects.includes(e)) {
            return e;
          }
        })
        .filter((e) => e !== undefined);
      this.objects = allowObjects as ObjectRepositoryType[];
      this.execute();
    }
  }

  execute(): void {
    this.objects.map((e) => {
      const object1 = Object.assign({}, e.object);
      if (e.object instanceof Circle) object1.x -= object1.width;

      this.objects.map((f) => {
        if (e.key != f.key) {
          const object2 = Object.assign({}, f.object);
          if (f.object instanceof Circle) object2.x -= object2.width;

          if (
            object1.x + object1.width >= object2.x &&
            object1.x <= object2.x + object2.width
          ) {
            console.log("colision");
          }
        }
      });
    });
  }
}
