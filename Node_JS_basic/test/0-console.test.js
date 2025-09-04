// test/0-console.test.js
const assert = require('assert');
const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should print the correct message', () => {
    let output = '';
    const storeLog = inputs => (output += inputs);
    console['log'] = storeLog;

    displayMessage('Hello World');
    assert.strictEqual(output, 'Hello World');
  });
});
