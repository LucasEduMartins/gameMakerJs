export type CanvasType = {
  width: number;
  height: number;
  container: HTMLDivElement;
};

export class Canvas {
  public width: number;
  public height: number;
  private container: HTMLDivElement;
  private htmlCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor({ width, height, container }: CanvasType) {
    this.width = width;
    this.height = height;
    this.container = container;
  }

  create() {
    const canvas = document.createElement("canvas");

    canvas.height = this.height;
    canvas.width = this.width;
    canvas.setAttribute("style", "border:1px solid");

    this.container.appendChild(canvas);
    this.context = canvas?.getContext("2d") as CanvasRenderingContext2D;
    return this;
  }

  reset() {
    this.context.fillStyle = "#ffffff";
    this.context.fillRect(0, 0, this.width, this.height);
  }

  getContext() {
    return this.context;
  }
}
