import { Game } from "../../controllers/Game";
import { GenericObject, ObjectType } from "./GenericObject";
export type CirclePropsType = Omit<ObjectType, "width" | "height"> & {
  radius: number;
};

export abstract class Circle extends GenericObject {
  radius: number;
  constructor({ radius, x, y, color }: CirclePropsType) {
    super({ x, y, color });
    this.radius = radius;
  }

  render(game: Game): void {
    game.getContext().fillStyle = this.color;
    game.getContext().beginPath();
    game.getContext().arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    game.getContext().fill();
  }
}
