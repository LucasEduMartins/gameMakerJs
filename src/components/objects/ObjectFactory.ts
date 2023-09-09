import { ObjectRepository } from "../../repositorys";
import { Circle, CirclePropsType } from "./Circle";
import { GenericObject } from "./GenericObject";
import { Rect, RectPropsType } from "../../hexagonal/core/model/objects/Rect";

export default class ObjectFactory {
  private static addOnObjectRepository(object: GenericObject) {
    ObjectRepository.getInstance().save(object.name, object);
  }

  static createCircle(props: CirclePropsType): Circle {
    const circle = new Circle(props);
    this.addOnObjectRepository(circle);
    return circle;
  }

  static createRect(props: RectPropsType): Rect {
    const rect = new Rect(props);
    this.addOnObjectRepository(rect);
    return rect;
  }
}
