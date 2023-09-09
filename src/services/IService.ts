import { GamerController } from "../controllers";

export interface IService {
  setObjects(objects): void;
  execute(gameController: GamerController): void;
}
