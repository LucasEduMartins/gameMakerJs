import { Canvas } from "../components/Canvas";
import { IService } from "../services/IService";
import { DrawService } from "../services";

export type GamerControllerType = {
  canvas: Canvas;
};

export class GamerController {
  private canvas: Canvas;
  private services: IService[] = [];

  constructor({ canvas }: GamerControllerType) {
    this.canvas = canvas;
    const drawService = new DrawService({ canvas });
    this.setService(drawService);
  }

  createGame() {
    this.canvas.create();
    this.services.map((service) => {
      service.execute();
    });
  }

  setService(service: IService) {
    this.services.push(service);
  }
}
