import { Game } from "../../controllers";
import { GenericObject, ObjectType } from "./GenericObject";

export type RectPropsType = ObjectType & {
  width: number;
  height: number;
};

export abstract class Rect extends GenericObject {
  width: number;
  height: number;
  
  constructor({ x, y, width, height, color, speed }: RectPropsType) {
    super({ x, y, color, speed });
    this.width = width;
    this.height = height;
  }

  render(game: Game) {
    game.getContext().fillStyle = this.color;
    game.getContext().fillRect(this.x, this.y, this.width, this.height);
  }
}
