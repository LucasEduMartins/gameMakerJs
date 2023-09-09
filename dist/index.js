var d = Object.defineProperty;
var l = (i, e, t) => e in i ? d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var s = (i, e, t) => (l(i, typeof e != "symbol" ? e + "" : e, t), t);
class a {
  constructor({ name: e, height: t, width: n, x: c, y: h, color: o, speed: r }) {
    s(this, "name");
    s(this, "x");
    s(this, "y");
    s(this, "width");
    s(this, "height");
    s(this, "color");
    s(this, "speed");
    this.name = e, this.height = t, this.width = n, this.x = c, this.y = h, this.color = o || "#0000ff", this.speed = r || 1;
  }
}
class u extends a {
  constructor({ name: e, radius: t, x: n, y: c, color: h, speed: o }) {
    super({ name: e, height: t, width: t, x: n, y: c, color: h, speed: o });
  }
}
class p extends a {
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
class j {
  addInputListener(e) {
    document.addEventListener("keydown", (t) => {
      e(t);
    });
  }
}
class f {
  constructor({
    height: e,
    width: t,
    inputHandleObjectPort: n,
    uiHandleObjectPort: c
  }) {
    s(this, "uiHandleObjectPort");
    s(this, "inputHandleObjectPort");
    s(this, "objects", []);
    c || (this.uiHandleObjectPort = new b({
      width: t,
      height: e
    })), n || (this.inputHandleObjectPort = new j()), this.uiHandleObjectPort.createContainer(), this.setupInput();
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
export {
  u as Circle,
  f as Game,
  a as GenericObject,
  p as Rect
};
