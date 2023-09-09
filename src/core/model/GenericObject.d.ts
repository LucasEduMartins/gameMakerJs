import { Game } from "../../application";
import { InputHandleObjectPort } from "../ports";
import { ObjectPropsType } from "./types";
export declare abstract class GenericObject {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    speed: number;
    constructor({ name, height, width, x, y, color, speed }: ObjectPropsType);
    abstract update(game: Game): void;
    abstract handleInput(inputHandleObjectPort: InputHandleObjectPort): void;
}
