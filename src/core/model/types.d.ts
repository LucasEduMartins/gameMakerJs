export type ObjectPropsType = {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color?: string;
    speed?: number;
};
export type ObjectCreatePropsType = {
    context: CanvasRenderingContext2D;
};
export type RectPropsType = ObjectPropsType;
export type CreateRectPropsType = ObjectCreatePropsType;
export type CirclePropsType = Omit<ObjectPropsType, "width" | "height"> & {
    radius: number;
};
export type CreateCirclePropsType = ObjectCreatePropsType;
