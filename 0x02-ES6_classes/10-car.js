export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._colr = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Sp = this.constructor[Symbol.species];
    return new Sp();
  }
}
