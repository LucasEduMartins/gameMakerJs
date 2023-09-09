import { ISubject } from "../observers/IObserver";
import { ObjectRepositoryType } from "../repositorys/ObjectRepository";
import { Service, ServiceType } from "./Service";

export type CallbackMovimentServiceType = (
  event: any,
  objects: ObjectRepositoryType[]
) => void;

export type MovementServiceType = ServiceType & {
  event: keyof DocumentEventMap;
  callback: CallbackMovimentServiceType;
  loop?: boolean;
};

export class MovementService extends Service {
  private event: keyof DocumentEventMap;
  private callback: Function;
  private loop: boolean;
  private isListening: boolean;

  constructor({
    objectsKeys,
    event,
    callback,
    loop = false,
  }: MovementServiceType) {
    super({ objectsKeys });
    this.event = event;
    this.callback = callback;
    this.loop = loop;
  }

  execute(): void {
    if (this.loop) {
      this.callback(undefined, this.objects);
      return;
    }

    if (!this.isListening) {
      window.addEventListener(this.event, (event) => {
        this.callback(event, this.objects);
      });
      this.isListening = true;
    }
  }

  update(subject: ISubject) {
    throw new Error("Method not implemented." + subject);
  }
}
