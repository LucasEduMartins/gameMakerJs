import { Game } from "../../controllers/Game";
import { Canvas } from "../Canvas";
export type ObjectType = {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  speed?: number;
};

export abstract class GenericObject {
  canvas: Canvas;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;

  constructor({ x, y, color, width, height, speed }: ObjectType) {
    this.x = x;
    this.y = y;
    this.color = color || "#0000ff";
    this.width = width;
    this.height = height;
    this.speed = speed || 20;
  }

  abstract render(game: Game);
  abstract update(game: Game);
  abstract handleInput(e: KeyboardEvent);
}
