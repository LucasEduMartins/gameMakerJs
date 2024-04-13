import { Game } from "../../../../src/application";
import { AbstractGame } from "../../../../src/application/Game";
import { InputHandleObjectPort } from "../../../../src/core/ports";
import { Block } from "./Block";

export class Shape {
  private isListening = false;

  constructor(readonly blocks: Block[]) {}

  update(game: AbstractGame): void {
    if (!this.isListening) {
      this.isListening = true;
      this.initListening(game);
    }
    this.blocks.map((block) => block.update(game));
  }

  private initListening(game: AbstractGame) {
    const container = game.getContainer() as HTMLCanvasElement;
    console.log(
      "🚀 ~ file: Shape.ts:20 ~ Shape ~ initListening ~ container:",
      container
    );
    container.addEventListener("keydown", (e) => {
      console.log("heere");

      for (const block of this.blocks) {
        block._handleInput(e);
      }
    });
  }

  handleInput(inputHandleObjectPort: InputHandleObjectPort): void {
    throw new Error("Method not implemented.");
  }
}
