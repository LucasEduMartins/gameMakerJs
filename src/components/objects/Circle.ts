import { GenericObject } from "./GenericObject";

export class Circle extends GenericObject {
  create(): void {
    this.canvas.getContext()!.fillStyle = this.color;
    this.canvas.getContext()!.beginPath();
    this.canvas.getContext()!.arc(this.x, this.y, 25, 0, Math.PI * 2, false);
    this.canvas.getContext()!.fill();
  }
}
