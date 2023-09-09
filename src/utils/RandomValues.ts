export default class RandomValues {
  static getRandomValue(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  static getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const corHexadecimal = `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

    return corHexadecimal;
  }
}
