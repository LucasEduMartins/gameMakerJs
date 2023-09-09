import { Game } from "../../controllers/Game";
import { GenericObject } from "./GenericObject";

export abstract class Rect extends GenericObject {
  render(game: Game) {
    game.getContext().fillStyle = this.color;
    game.getContext().fillRect(this.x, this.y, this.width, this.height);
  }
}
