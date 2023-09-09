export abstract class Rect extends GenericObject {
  render({ context }: CreateRectPropsType) {
    context.fillStyle = this.color;
    context.strokeRect(this.x, this.y, this.width, this.height);
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
