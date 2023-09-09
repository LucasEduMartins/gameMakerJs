var d = Object.defineProperty;
var l = (n, e, t) => e in n ? d(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var s = (n, e, t) => (l(n, typeof e != "symbol" ? e + "" : e, t), t);
class h {
  constructor({ name: e, height: t, width: i, x: a, y: o, color: c, speed: r }) {
    s(this, "name");
    s(this, "x");
    s(this, "y");
    s(this, "width");
    s(this, "height");
    s(this, "color");
    s(this, "speed");
    this.name = e, this.height = t, this.width = i, this.x = a, this.y = o, this.color = c || "#0000ff", this.speed = r || 1;
  }
}
class u extends h {
  constructor({ name: e, radius: t, x: i, y: a, color: o, speed: c }) {
    super({ name: e, height: t, width: t, x: i, y: a, color: o, speed: c });
  }
}
class p extends h {
}
class b {
  constructor({ width: e, height: t }) {
    s(this, "canvas");
    s(this, "context");
    s(this, "width");
    s(this, "height");
    this.width = e, this.height = t;
  }
  getContainer() {
    return this.canvas;
  }
  createContainer() {
    this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, document.body.appendChild(this.canvas), this.context = this.canvas.getContext("2d");
  }
  render(e) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const t of e)
      this.context.fillStyle = t.color, t instanceof u && (this.context.arc(
        t.x,
        t.y,
        t.width,
        0,
        Math.PI * 2,
        !1
      ), this.context.beginPath(), this.context.arc(
        t.x,
        t.y,
        t.width,
        0,
        Math.PI * 2,
        !1
      ), this.context.fill()), t instanceof p && (this.context.strokeRect(
        t.x,
        t.y,
        t.width,
        t.height
      ), this.context.fillRect(t.x, t.y, t.width, t.height));
  }
}
class f {
  addInputListener(e) {
    document.addEventListener("keydown", (t) => {
      e(t);
    });
  }
}
class g {
  constructor({
    height: e,
    width: t,
    inputHandleObjectPort: i,
    uiHandleObjectPort: a
  }) {
    s(this, "uiHandleObjectPort");
    s(this, "inputHandleObjectPort");
    s(this, "objects", []);
    a || (this.uiHandleObjectPort = new b({
      width: t,
      height: e
    })), i || (this.inputHandleObjectPort = new f()), this.uiHandleObjectPort.createContainer(), this.setupInput();
  }
  setDependencies() {
  }
  addObject(e) {
    this.objects.push(e);
  }
  removeObject(e) {
    const t = this.objects.indexOf(e);
    t !== -1 && this.objects.splice(t, 1);
  }
  update() {
    for (const e of this.objects)
      e.update(this);
  }
  render() {
    this.uiHandleObjectPort.render(this.objects);
  }
  setupInput() {
    this.inputHandleObjectPort.addInputListener((e) => {
      for (const t of this.objects)
        t.handleInput(e);
    });
  }
  start() {
    this.setDependencies();
    const e = () => {
      this.update(), this.render(), requestAnimationFrame(e);
    };
    e();
  }
  getContainer() {
    return this.uiHandleObjectPort.getContainer();
  }
  getObjects() {
    return this.objects;
  }
}
class j {
  static getRandomValue(e, t) {
    return Math.floor(Math.random() * t) + e;
  }
  static getRandomColor() {
    const e = Math.floor(Math.random() * 256), t = Math.floor(Math.random() * 256), i = Math.floor(Math.random() * 256);
    return `#${e.toString(16).padStart(2, "0")}${t.toString(16).padStart(2, "0")}${i.toString(16).padStart(2, "0")}`;
  }
}
export {
  u as Circle,
  g as Game,
  h as GenericObject,
  j as RandomValues,
  p as Rect
};
