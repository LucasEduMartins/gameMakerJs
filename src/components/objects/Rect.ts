import { GenericObject } from "./GenericObject";

export class Rect extends GenericObject {
  create() {
    this.canvas.getContext()!.fillStyle = this.color;
    this.canvas.getContext()!.fillRect(this.x, this.y, this.width, this.height);
  }
}
