export class Canvas {
  private width: number;
  private heigth: number;
  private container: HTMLDivElement;
  private htmlCanvas: HTMLCanvasElement;

  constructor({ width, heigth, container }) {
    this.width = width;
    this.heigth = heigth;
    this.container = container;
  }

  create() {
    const canvas = document.createElement("canvas");
    canvas.height = this.heigth;
    canvas.width = this.width;
    canvas.setAttribute("style", "border:1px solid");
    this.container!.innerHTML = canvas.outerHTML;

    this.htmlCanvas = document.getElementsByTagName("canvas")[0];

    return this;
  }

  reset() {
    this.htmlCanvas.getContext("2d")!.fillStyle = "#ffffff";
    this.htmlCanvas.getContext("2d")!.fillRect(0, 0, this.width, this.heigth);
  }

  getContext() {
    return this.htmlCanvas.getContext("2d");
  }
}
