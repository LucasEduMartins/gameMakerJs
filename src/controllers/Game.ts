import { GenericObject } from "../components";

export type GamePropsType = {
  width: number;
  height: number;
};

class Game {
  private events: { [key: string]: Function[] } = {};
  on(event: string, handler: Function) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(handler);
  }

  emit(event: string, data?: any) {
    if (this.events[event]) {
      for (const handler of this.events[event]) {
        handler(data);
      }
    }
  }
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private objects: GenericObject[] = [];

  constructor({ width, height }: GamePropsType) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.id = "canvas-game";

    document.body.appendChild(this.canvas);
    const canvas = document.getElementById("canvas-game");
    canvas!.style.border = "1px solid black";

    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.setupInput();
  }

  addObject(object: GenericObject) {
    this.objects.push(object);
  }

  removeObject(object: GenericObject) {
    const index = this.objects.indexOf(object);
    if (index !== -1) {
      this.objects.splice(index, 1);
    }
  }

  update() {
    // Check collisions before/after update
    for (let i = 0; i < this.objects.length; i++) {
      for (let j = i + 1; j < this.objects.length; j++) {
        const objA = this.objects[i];
        const objB = this.objects[j];
        if (typeof objA.collidesWith === 'function' && objA.collidesWith([objB], this)) {
          this.emit('collision', { objectA: objA, objectB: objB });
        } else if (typeof objB.collidesWith === 'function' && objB.collidesWith([objA], this)) {
          this.emit('collision', { objectA: objB, objectB: objA });
        }
      }
    }
    for (const object of this.objects) {
      object.update(this);
    }
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const object of this.objects) {
      object.render(this);
    }
  }

  private setupInput() {
    document.addEventListener("keydown", (e) => {
      for (const object of this.objects) {
        object.handleInput(e);
      }
    });
  }

  start() {
    const gameLoop = () => {
      this.update();
      this.render();
      requestAnimationFrame(gameLoop);
    };
    gameLoop();
  }

  getContext() {
    return this.context;
  }

  getCanvas() {
    return this.canvas;
  }

  getObjects() {
    return this.objects;
  }
}

export { Game };
