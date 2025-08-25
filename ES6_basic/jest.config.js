// jest.config.js
export default {
  testEnvironment: "node",             // environnement Node
  transform: {},                        // pas de Babel pour tests simples
  testMatch: ["**/__tests__/**/*.test.js"] // tous les fichiers .test.js dans __tests__
};
