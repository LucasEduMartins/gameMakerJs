import { GenericObject, ObjectType } from "./GenericObject";
type CircleType = Omit<ObjectType, "width" | "height"> & { radius: number };

export class Circle extends GenericObject {
  constructor({ canvas, radius, x, y, color }: CircleType) {
    super({ canvas, height: radius, width: radius, x, y, color });
  }

  create(): void {
    this.canvas.getContext()!.fillStyle = this.color;
    this.canvas.getContext()!.beginPath();
    this.canvas
      .getContext()!
      .arc(this.x, this.y, this.width, 0, Math.PI * 2, false);
    this.canvas.getContext()!.fill();
  }
}
