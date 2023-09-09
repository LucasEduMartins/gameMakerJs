import { Canvas } from "../components/Canvas";
import { IService } from "../services/IService";
import { DrawService } from "../services";

export type GamerControllerType = {
  canvas: Canvas;
  fps: number;
};

export class GamerController {
  private canvas: Canvas;
  private fps: number;
  private services: IService[] = [];
  private drawService: DrawService;

  constructor({ canvas, fps }: GamerControllerType) {
    this.canvas = canvas;
    this.fps = fps;
    this.canvas.create();

    this._createDrawService();
  }

  private _createDrawService() {
    const drawService = new DrawService();
    this.drawService = drawService;
  }

  getCanvas() {
    return this.canvas;
  }

  createGame() {
    const gameLoop = () => {
      this.services.map((service) => {
        service.execute(this);
      });
      this.drawService.execute(this);
    };
    setInterval(gameLoop, this.fps);
  }

  setService(service: IService) {
    this.services.push(service);
  }

  getDrawService() {
    return this.drawService;
  }
}
