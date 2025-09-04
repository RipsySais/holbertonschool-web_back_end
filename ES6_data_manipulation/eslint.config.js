// eslint.config.js
export default [
  {
    files: ["*.js"],          // tous les fichiers JS
    languageOptions: {
      ecmaVersion: 2020,      // support ES6+
      sourceType: "module"    // pour import/export
    },
    rules: {
      semi: ["error", "always"],       // point-virgule obligatoire
      quotes: ["error", "single"],     // simple quotes
      indent: ["error", 2],            // indentation 2 espaces
      "no-unused-vars": "warn",        // variable non utilisée
      "no-console": "off"              // autorise console.log
    }
  }
];
