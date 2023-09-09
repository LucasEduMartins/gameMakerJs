import { UIHandleObjectPort } from "../ports";
import { GenericObject } from "./GenericObject";
import { CirclePropsType } from "./types";

export abstract class Circle extends GenericObject {
  constructor({ name, radius, x, y, color, speed }: CirclePropsType) {
    super({ name, height: radius, width: radius, x, y, color, speed });
  }

  render(handleObjectService: UIHandleObjectPort): void {
    handleObjectService.render(this);
  }
}
