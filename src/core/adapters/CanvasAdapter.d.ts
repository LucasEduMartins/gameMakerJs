import { GenericObject } from "../model";
import { UIHandleObjectPort } from "../ports";
export default class CanvasAdpter implements UIHandleObjectPort {
    private canvas;
    private context;
    private width;
    private height;
    constructor({ width, height }: {
        width: any;
        height: any;
    });
    getContainer(): HTMLCanvasElement;
    createContainer(): void;
    render(objects: GenericObject[]): void;
}
