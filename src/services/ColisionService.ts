import { Service, ServiceType } from "./Service";

type ColisionServiceType = ServiceType & { eventName: string };

export class ColisionService extends Service {
  private eventName: string;

  constructor({ objectsKeys, eventName }: ColisionServiceType) {
    super({ objectsKeys });
    this.eventName = eventName;
  }

  execute(): void {
    document.addEventListener(this.eventName, (event) => {
      event.preventDefault();
    });
  }
}
