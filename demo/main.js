import { Game, Circle, Rect } from "../dist/index.umd.cjs";
import { RandomValues } from "../src/utils";

// create a custom Rect to your game
class Square extends Rect {
  isListening = false;
  update(game) {
    if (this.isListening) return;

    game.getContainer().addEventListener("mousemove", (e) => {
      const rect = game.getContainer().getBoundingClientRect();
      this.x = e.clientX - rect.left - this.width / 2;
      this.y = e.clientY - rect.top - this.height / 2;
    });

    this.isListening = true;
  }

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
    const container = game.getContainer();
    this.y += this.speedY;
    this.x += this.speedX;
    this.collidesWith(game.getObjects());

    if (this.y < 0 || this.y > container.height) this.speedY *= -1;
    if (this.x < 0 || this.x > container.width) this.speedX *= -1;
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
// game.addObject(
//   new Square({ x: 100, y: 100, width: 25, height: 100, speed: 30 })
// );

game.addObject(
  new Ball({
    name: "ball1",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball2",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball3",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball4",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball5",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball6",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball7",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball8",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball9",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball10",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball11",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);
game.addObject(
  new Ball({
    name: "ball12",
    x: RandomValues.getRandomValue(1, 700),
    y: RandomValues.getRandomValue(1, 700),
    radius: 20,
    color: RandomValues.getRandomColor(),
    speed: 5,
  })
);

//start the game
game.start();
