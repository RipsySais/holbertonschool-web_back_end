// jest.config.js
export default {
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".js"], // nécessaire pour ESM
  transform: {},                    // pas de Babel pour tests simples
  testMatch: ["**/__tests__/**/*.test.js"] // tous les tests dans __tests__
};
