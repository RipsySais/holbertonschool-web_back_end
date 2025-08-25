export default {
  testEnvironment: "node",
  transform: {},
  testMatch: ["**/tests/**/*.test.js"],  // tests au lieu de __tests__
  moduleFileExtensions: ["js", "json"],
  extensionsToTreatAsEsm: ['.js']
};