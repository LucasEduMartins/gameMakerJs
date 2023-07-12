import { Canvas } from "../Canvas";
type ObjectType = {
  canvas: Canvas;
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  speed?: number;
};

export interface IObject {
  create();
}

export abstract class GenericObject implements IObject {
  canvas: Canvas;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;

  constructor({ x, y, color, width, height, canvas, speed }: ObjectType) {
    this.x = x;
    this.y = y;
    this.color = color || "#0000ff";
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.speed = speed || 5;
  }

  abstract create();
}
