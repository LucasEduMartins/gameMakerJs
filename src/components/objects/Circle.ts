import { Game } from "../../controllers/Game";
import { GenericObject, ObjectType } from "./GenericObject";
export type CirclePropsType = Omit<ObjectType, "width" | "height"> & {
  radius: number;
};

export abstract class Circle extends GenericObject {
  constructor({ radius, x, y, color }: CirclePropsType) {
    super({ height: radius * 2, width: radius * 2, x, y, color });
  }

  render(game: Game): void {
    game.getContext().fillStyle = this.color;
    game.getContext().beginPath();
    game.getContext().arc(this.x, this.y, this.width, 0, Math.PI * 2, false);
    game.getContext().fill();
  }
}
