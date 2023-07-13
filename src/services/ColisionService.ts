import { Service, ServiceType } from "./Service";

type ColisionServiceType = ServiceType & { eventName: string; callback() };

export class ColisionService extends Service {
  private eventName: string;

  constructor({ objectsKeys, eventName, callback }: ColisionServiceType) {
    super({ objectsKeys });
    this.eventName = eventName;
    callback();
  }

  execute(): void {
    document.addEventListener(this.eventName, (event) => {
      event.preventDefault();
    });
  }
}
