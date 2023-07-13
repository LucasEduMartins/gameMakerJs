import { Canvas } from "../components/Canvas";
import { IService } from "../services/IService";

export class GamerController {
  private canvas: Canvas;
  private services: IService[] = [];

  constructor({ canvas }) {
    this.canvas = canvas;
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
