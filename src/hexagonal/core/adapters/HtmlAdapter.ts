import { GenericObject } from "../model";
import { UIHandleObjectPort } from "../ports";

export default class CanvasAdpter implements UIHandleObjectPort {
  private container: HTMLDivElement;
  private width: number;
  private height: number;

  constructor(private props: { width: number; height: number }) {}

  createContainer() {
    this.container = document.createElement("div");
    // this.container.width = this.width;
    // this.container.height = this.height;
    // document.body.appendChild(this.canvas);

    // this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }
  render(object: GenericObject[]) {
    throw new Error("Method not implemented.");
  }
}
