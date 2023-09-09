import { GenericObject } from "../model";
export type UIHandleObjectPort = {
    createContainer(): any;
    render(object: GenericObject[]): any;
    getContainer(): any;
};
