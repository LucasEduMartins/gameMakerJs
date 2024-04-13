var d = Object.defineProperty;
var l = (o, t, e) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => (l(o, typeof t != "symbol" ? t + "" : t, e), e);
class h {
  constructor({ name: t, height: e, width: r, x: a, y: i, color: c, speed: n }) {
    s(this, "name");
    s(this, "x");
    s(this, "y");
    s(this, "width");
    s(this, "height");
    s(this, "color");
    s(this, "speed");
    this.name = t, this.height = e, this.width = r, this.x = a, this.y = i, this.color = c || "#0000ff", this.speed = n || 1;
  }
}
class m extends h {
  constructor({ name: t, radius: e, x: r, y: a, color: i, speed: c }) {
    super({ name: t, height: e, width: e, x: r, y: a, color: i, speed: c });
  }
}
class g extends h {
}
class b {
  constructor(t, e, r) {
    s(this, "objects", []);
    this.width = t, this.height = e, this.uiHandleObjectPort = r;
  }
  addObject(t) {
    this.objects.push(t);
  }
  update() {
    for (const t of this.objects)
      t.update(this);
  }
  render() {
    this.uiHandleObjectPort.render(this.objects);
  }
  getContainer() {
    return this.uiHandleObjectPort.getContainer();
  }
  start() {
    const t = () => {
      this.update(), this.render(), requestAnimationFrame(t);
    };
    t();
  }
}
class p {
  static getRandomValue(t, e) {
    return Math.floor(Math.random() * e) + t;
  }
  static getRandomColor() {
    const t = Math.floor(Math.random() * 256), e = Math.floor(Math.random() * 256), r = Math.floor(Math.random() * 256);
    return `#${t.toString(16).padStart(2, "0")}${e.toString(16).padStart(2, "0")}${r.toString(16).padStart(2, "0")}`;
  }
}
export {
  b as AbstractGame,
  m as Circle,
  h as GenericObject,
  p as RandomValues,
  g as Rect
};
