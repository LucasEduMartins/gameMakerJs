import { Canvas } from "../components/Canvas";
import { IService } from "../services/IService";
import {
  ColisionService,
  ColisionServiceType,
} from "../services/ColisionService";
import {
  MovementService,
  MovementServiceType,
} from "../services/MovementService";
import { DrawService } from "../services";

export type GamerControllerType = {
  canvas: Canvas;
  services?: {
    movementService?: MovementServiceType;
    colisionService?: ColisionServiceType;
  };
};

export class GamerController {
  private canvas: Canvas;
  private services: IService[] = [];

  constructor({ canvas, services }: GamerControllerType) {
    this.canvas = canvas;
    const {
      movementService: movementServiceProps,
      colisionService: colisionServiceProps,
    } = services || {};

    const drawService = new DrawService({ canvas });
    const movementService = new MovementService(movementServiceProps || {});
    const colisionService = new ColisionService(colisionServiceProps || {});
    this.setService(drawService);
    this.setService(movementService);
    this.setService(colisionService);
    drawService.attach(colisionService);
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
