import { GenericObject } from "../model";

export type UIHandleObjectPort = {
  createContainer();
  render(object: GenericObject[]);
};
