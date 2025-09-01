export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
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

  // Méthode pour afficher la devise complète
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
