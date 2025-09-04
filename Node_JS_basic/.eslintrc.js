module.exports = {
  env: {
    node: true,       // Environnement Node.js
    es6: true,        // Support ES6
    mocha: true,      // Pour les tests Mocha
  },
  parserOptions: {
    ecmaVersion: 2018, // Version ECMAScript
    sourceType: 'module',
  },
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
