import { ObjectRepositoryType } from "../repositorys/ObjectRepository";
import { Service, ServiceType } from "./Service";

export type CallbackMovimentServiceType = (
  event: any,
  objects: ObjectRepositoryType[]
) => void;

export type MovementServiceType = ServiceType & {
  event: keyof DocumentEventMap;
  callback: CallbackMovimentServiceType;
};

export class MovementService extends Service {
  private event: keyof DocumentEventMap;
  private callback: Function;

  constructor({ objectsKeys, event, callback }: MovementServiceType) {
    super({ objectsKeys });
    this.event = event;
    this.callback = callback;
  }

  execute(): void {
    document.addEventListener(this.event, (event) => {
      this.callback(event, this.objects);
    });
  }
}
