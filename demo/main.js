import { Circle, Rect } from "../src/components";
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

  collidesWith(objects, game) {
    for (const object of objects) {
      if (this === object) continue;


      // Circle-Circle collision
      if (this.radius !== undefined && object.radius !== undefined) {
        const dx = this.x - object.x;
        const dy = this.y - object.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.radius + object.radius) {
          this.speedX *= -1;
          console.log('Collision detected between Circle-Circle');

          return true;
        }
      }
      // Rect-Rect collision
      else if (this.width !== undefined && this.height !== undefined && object.width !== undefined && object.height !== undefined) {
        if (
          this.x < object.x + object.width &&
          this.x + this.width > object.x &&
          this.y < object.y + object.height &&
          this.y + this.height > object.y
        ) {
          this.speedX *= -1;
          console.log('Collision detected between Rect-Rect');

          return true;
          
        }
      }
      // Circle-Rect collision
      else {
        // Identify which is circle and which is rect
        let circle, rect;
        if (this.radius !== undefined && object.width !== undefined) {
          circle = this;
          rect = object;
        } else if (object.radius !== undefined && this.width !== undefined) {
          circle = object;
          rect = this;
        } else {
          continue;
        }
        // Find closest point to the circle within the rectangle
        const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.width));
        const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.height));
        const dx = circle.x - closestX;
        const dy = circle.y - closestY;
        if ((dx * dx + dy * dy) < (circle.radius * circle.radius)) {
          this.speedX *= -1;
          console.log('Collision detected between Circle and Rect');
          return true;
        }
      }
    }
    return false;
  }
}

// create game instance
const game = new Game({ width: 800, height: 600 });

// add some object
const square = new Square({ x: 100, y: 100, width: 25, height: 100, speed: 30 });
const ball = new Ball({ x: 250, y: 100, radius: 10, speed: 20 });
game.addObject(square);
game.addObject(ball);

// Example: listen for collision event and change color of colliding objects
game.on('collision', ({ objectA, objectB }) => {
  objectA.color = '#ff0000'; // red
  objectB.color = '#00ff00'; // green
  console.log('Collision detected between:', objectA, objectB);
});

//start the game
game.start();
