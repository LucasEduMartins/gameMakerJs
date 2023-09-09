import { GenericObject } from "../core/model";
import { GamePropsType } from "./types";
export default class Game {
    private uiHandleObjectPort;
    private inputHandleObjectPort;
    private objects;
    constructor({ height, width, inputHandleObjectPort, uiHandleObjectPort, }: GamePropsType);
    private setDependencies;
    addObject(object: GenericObject): void;
    removeObject(object: GenericObject): void;
    private update;
    private render;
    private setupInput;
    start(): void;
    getContainer(): any;
    getObjects(): GenericObject[];
}
