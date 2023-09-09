import { Circle, GenericObject, Rect } from "../src/components";
import { CirclePropsType } from "../src/components/objects/Circle";
import { Game } from "../src/controllers";

// create a custom Rect to your game
class Square extends Rect {
  update() {}

  // handle the input event by keyboard event
  handleInput(e) {
    const { key } = e;

    if (key == "ArrowLeft") this.x -= this.speed;
    if (key == "ArrowRight") this.x += this.speed;
    if (key == "ArrowUp") this.y -= this.speed;
    if (key == "ArrowDown") this.y += this.speed;
  }
}

// create a custom Circle object to your game
class Ball extends Circle {
  // create custom properties to your game object
  speedX;
  speedY;

  constructor(props) {
    super(props);
    this.speedX = this.speed;
    this.speedY = this.speed;
  }

  // implements automatic moviment to the ball
  // and verify the collision with other objects
  update(game) {
    const canvas = game.getCanvas();
    this.y += this.speedY;
    this.x += this.speedX;
    this.collidesWith(game.getObjects());

    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
  }

  handleInput() {}

  collidesWith(objects) {
    for (const object of objects) {
      if (this !== object) {
        if (
          this.x < object.x + object.width &&
          this.x + this.width > object.x &&
          this.y < object.y + object.height &&
          this.y + this.height > object.y
        ) {
          this.speedX *= -1;
          return false;
        }
      }
    }
    return true;
  }
}

// create game instance
const game = new Game({ width: 800, height: 600 });

// add some object
game.addObject(
  new Square({ x: 100, y: 100, width: 25, height: 100, speed: 30 })
);

game.addObject(new Ball({ x: 250, y: 100, radius: 10, speed: 20 }));

//start the game
game.start();
