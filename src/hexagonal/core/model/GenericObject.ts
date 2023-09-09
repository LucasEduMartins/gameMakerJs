import { InputHandleObjectPort } from "../../ports/InputHandleObjectPort";
import { UIHandleObjectPort } from "../../ports/UIHandleObjectPort";
import { ObjectPropsType } from "./types";

export abstract class GenericObject {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;

  constructor(private props: ObjectPropsType) {
    this.color = props.color || "#0000ff";
    this.speed = props.speed || 1;
  }

  abstract render(uiHandleObjectPort: UIHandleObjectPort): void;
  abstract update(): void;
  abstract handleInput(inputHandleObjectPort: InputHandleObjectPort): void;
}
event: KeyboardEvent;
