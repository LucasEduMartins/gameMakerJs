import { AbstractGame } from "../../../../src/application/Game";
import { Shape } from "./Shape";

export class Game extends AbstractGame {
  private shapes: Shape[] = [];

  addShape(shape: Shape): void {
    this.shapes.push(shape);
    shape.blocks.map((block) => super.addObject(block));
  }

  private update() {
    for (const object of this.objects) {
      object.update(this);
    }
  }
}
