import { GenericObject, Circle, Rect } from "../model";
import { UIHandleObjectPort } from "../ports";

export default class CanvasAdpter implements UIHandleObjectPort {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  constructor({ width, height }) {
    this.width = width;
    this.height = height;
  }

  createContainer() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    document.body.appendChild(this.canvas);

    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  render(objects: GenericObject[]) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const object of objects) {
      this.context.fillStyle = object.color;
      this.context.beginPath();
      if (object instanceof Circle)
        this.context.arc(
          object.x,
          object.y,
          object.width,
          0,
          Math.PI * 2,
          false
        );
      if (object instanceof Rect) {
        // context.strokeRect(this.x, this.y, this.width, this.height);
        this.context.fillRect(object.x, object.y, object.width, object.height);
      }
      this.context.fill();
    }
  }
}
