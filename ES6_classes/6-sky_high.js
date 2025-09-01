import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Getter pour floors
  get floors() {
    return this._floors;
  }

  // Setter pour floors
  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  // Méthode pour le message d'évacuation
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
