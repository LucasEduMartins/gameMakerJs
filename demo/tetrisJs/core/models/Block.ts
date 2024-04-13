import { AbstractGame } from "../../../../src/application/Game";
import { Rect } from "../../../../src/core/model";
import { InputHandleObjectPort } from "../../../../src/core/ports";

export class Block extends Rect {
  update(game: AbstractGame): void {}
  handleInput(inputHandleObjectPort: InputHandleObjectPort): void {}
  _handleInput(event: KeyboardEvent): void {
    const { key } = event;

    if (key == "ArrowLeft") this.x -= this.speed;
    if (key == "ArrowRight") this.x += this.speed;
    if (key == "ArrowUp") this.y -= this.speed;
    if (key == "ArrowDown") this.y += this.speed;
  }
}
