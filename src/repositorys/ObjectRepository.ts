import { GenericObject } from "../components/objects/GenericObject";
import { IRepository } from "./IRepository";

export type ObjectRepositoryType = { key: string; object: GenericObject };

export class ObjectRepository implements IRepository {
  private static instance: ObjectRepository;
  private objectList: ObjectRepositoryType[] = [];

  private constructor() {}

  public static getInstance(): ObjectRepository {
    if (!this.instance) {
      this.instance = new ObjectRepository();
    }
    return this.instance;
  }

  save(key: string, object: GenericObject) {
    this.objectList.push({ key, object });
  }
  get(key: string) {
    return this.objectList.find((e) => e.key == key);
  }
  getAll() {
    return this.objectList;
  }
  delete(key: string) {
    this.objectList.filter((e) => e.key != key);
  }
}
