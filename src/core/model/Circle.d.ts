import { GenericObject } from "./GenericObject";
import { CirclePropsType } from "./types";
export declare abstract class Circle extends GenericObject {
    constructor({ name, radius, x, y, color, speed }: CirclePropsType);
}
