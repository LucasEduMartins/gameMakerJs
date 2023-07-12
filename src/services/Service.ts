import {
  ObjectRepository,
  ObjectRepositoryType,
} from "../repositorys/ObjectRepository";
import { IService } from "./IService";

export type ServiceType = { objectsKeys?: string[] };

export abstract class Service implements IService {
  objects: ObjectRepositoryType[] = [];

  constructor({ objectsKeys = [] }: ServiceType) {
    if (objectsKeys.length == 0) {
      this.objects = ObjectRepository.getInstance().getAll();
      return;
    }

    const objectList = Object.values(objectsKeys)
      .map((objectKey) => {
        const object = ObjectRepository.getInstance().get(objectKey);
        if (!object)
          console.warn(objectKey, "is not in the objecti repository");
        return object;
      })
      .filter(function (element) {
        return element !== undefined;
      }) as ObjectRepositoryType[];

    this.objects = objectList;
  }

  setObjects(objects: any): void {
    this.objects = objects;
  }

  abstract execute(): void;
}
