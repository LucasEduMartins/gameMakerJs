import { InputHandleObjectPort } from "../core/ports/InputHandleObjectPort";
import { UIHandleObjectPort } from "../core/ports/UIHandleObjectPort";

export type GamePropsType = {
  uiHandleObjectPort: UIHandleObjectPort;
  inputHandleObjectPort: InputHandleObjectPort;
};
