/**
 * Retourne une Map contenant une liste de courses avec leurs quantités.
 * @returns {Map} - Une Map avec les noms des articles comme clés et les quantités comme valeurs.
 */
export default function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  return groceries;
}
