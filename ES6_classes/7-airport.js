export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter et setter pour name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter et setter pour code
  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Méthode pour la description par défaut
  toString() {
    return `[object ${this._code}]`;
  }
}
