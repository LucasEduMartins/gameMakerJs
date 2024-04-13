import { AbstractGame } from "../../application/Game";
import { InputHandleObjectPort } from "../ports";
import { ObjectPropsType } from "./types";

export abstract class GenericObject {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;

  constructor({ name, height, width, x, y, color, speed }: ObjectPropsType) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.color = color || "#0000ff";
    this.speed = speed || 1;
  }

  abstract update(game: AbstractGame): void;
  abstract handleInput(inputHandleObjectPort: InputHandleObjectPort): void;
}
