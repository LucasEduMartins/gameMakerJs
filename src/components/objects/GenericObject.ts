import { Game } from "../../controllers/Game";
import { Canvas } from "../Canvas";
export type ObjectType = {
  x: number;
  y: number;
  color?: string;
  speed?: number;
};

export abstract class GenericObject {
  abstract collidesWith(objects: GenericObject[], game?: any): boolean;
  canvas: Canvas;
  x: number;
  y: number;

  color: string;
  speed: number;

  constructor({ x, y, color, speed }: ObjectType) {
    this.x = x;
    this.y = y;
    this.color = color || "#0000ff";
    this.speed = speed || 5;
  }

  abstract render(game: Game);
  abstract update(game: Game);
  abstract handleInput(e: KeyboardEvent);
}
