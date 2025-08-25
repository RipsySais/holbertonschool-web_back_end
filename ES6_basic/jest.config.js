// jest.config.js
export default {
  testEnvironment: "node",
  transform: {},              // pas de Babel ici
  testMatch: ["**/__tests__/**/*.test.js"]  // uniquement les fichiers dans __tests__
};
