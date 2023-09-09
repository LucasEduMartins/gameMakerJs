import { InputHandleObjectPort } from "../core/ports/InputHandleObjectPort";
import { UIHandleObjectPort } from "../core/ports/UIHandleObjectPort";
export type GamePropsType = {
    width: number;
    height: number;
    uiHandleObjectPort?: UIHandleObjectPort;
    inputHandleObjectPort?: InputHandleObjectPort[];
};
