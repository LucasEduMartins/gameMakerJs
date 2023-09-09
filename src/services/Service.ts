import { GamerController } from "../controllers";
import { IObserver, ISubject } from "../observers/IObserver";
import {
  ObjectRepository,
  ObjectRepositoryType,
} from "../repositorys/ObjectRepository";
import { IService } from "./IService";

export type ServiceType = { objectsKeys?: string[] };

export abstract class Service implements IService, ISubject, IObserver {
  objects: ObjectRepositoryType[] = [];
  private observers: IObserver[] = [];

  constructor({ objectsKeys = [] }: ServiceType) {
    if (objectsKeys.length == 0) {
      this.objects = ObjectRepository.getInstance().getAll();
      return;
    }

    this.objects = ObjectRepository.getInstance().getByKeys(objectsKeys);
  }

  public setObjects(objects: any): void {
    this.objects = objects;
  }

  public attach(observer: IObserver): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Subject: Observer has been attached already.");
    }

    this.observers.push(observer);
  }

  public detach(observer: IObserver): void {
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

  abstract update(subject: ISubject);

  abstract execute(gameController: GamerController): void;
}
