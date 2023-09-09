import { GenericObject } from "../components/objects/GenericObject";
import { Service } from "../services/Service";
import { IRepository } from "./IRepository";

export type ServiceRepositoryType = { key: string; service: Service };

export class ServiceRepository implements IRepository {
  private static instance: ServiceRepository;
  private serviceList: ServiceRepositoryType[] = [];

  private constructor() {}

  public static getInstance(): ServiceRepository {
    if (!this.instance) {
      this.instance = new ServiceRepository();
    }
    return this.instance;
  }

  save(key: string, data: Service) {
    this.serviceList.push({ key, service: data });
  }

  get(key: string) {
    return this.serviceList.find((e) => e.key == key);
  }

  getAll() {
    return this.serviceList;
  }

  delete(key: string) {
    this.serviceList.filter((e) => e.key != key);
  }

  getByKeys(keys: string[]) {
    const serviceList = keys
      .map((objectKey) => {
        const object = this.get(objectKey);
        if (!object)
          console.warn(objectKey, "is not in the objecti repository");
        return object;
      })
      .filter(function (element) {
        return element !== undefined;
      }) as ServiceRepositoryType[];

    return serviceList;
  }
}
