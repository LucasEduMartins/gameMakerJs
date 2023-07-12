import { GenericObject } from "../components/objects/GenericObject";

export interface IRepository {
  save(key: string, object: GenericObject);
  get(key: string);
  getAll();
  delete(key: string);
}
