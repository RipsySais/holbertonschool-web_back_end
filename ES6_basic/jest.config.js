export default {
  testEnvironment: "node",            // environnement Node
  extensionsToTreatAsEsm: [".js"],    // traite tous les .js comme ESM
  transform: {},                       // pas de transformation Babel nécessaire pour tests simples
  testMatch: ["**/*.test.js"],         // tous les fichiers .test.js, même à la racine
  moduleFileExtensions: ["js", "json"] // extensions reconnues
};
