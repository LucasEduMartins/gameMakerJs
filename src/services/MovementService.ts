import { Service, ServiceType } from "./Service";

export type MovementServiceType = ServiceType;

export class MovementService extends Service {
  constructor({ objectsKeys }: MovementServiceType) {
    super({ objectsKeys });
  }

  execute(): void {
    document.addEventListener("keydown", ({ key }) => {
      if (key == "ArrowLeft") {
        this.objects.forEach((obj) => {
          obj.object.x -= obj.object.speed;
        });
      }
      if (key == "ArrowUp") {
        this.objects.forEach((obj) => {
          obj.object.y -= obj.object.speed;
        });
      }
      if (key == "ArrowRight") {
        this.objects.forEach((obj) => {
          obj.object.x += obj.object.speed;
        });
      }
      if (key == "ArrowDown") {
        this.objects.forEach((obj) => {
          obj.object.y += obj.object.speed;
        });
      }
    });
  }
}
