const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter et setter pour brand
  get brand() {
    return this._brand;
  }

  set brand(brand) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = brand;
  }

  // Getter et setter pour motor
  get motor() {
    return this._motor;
  }

  set motor(motor) {
    if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = motor;
  }

  // Getter et setter pour color
  get color() {
    return this._color;
  }

  set color(color) {
    if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = color;
  }

  // Méthode pour cloner la voiture
  cloneCar() {
    const CloneConstructor = this.constructor;
    return new CloneConstructor(this.brand, this.motor, this.color);
  }
}
