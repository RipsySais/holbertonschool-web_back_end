export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter et setter pour size
  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;
  }

  // Getter et setter pour location
  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  // Méthode pour la conversion en Number
  valueOf() {
    return this._size;
  }

  // Méthode pour la conversion en String
  toString() {
    return this._location;
  }
}
