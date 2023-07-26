const fs = require('node:fs');
const AJSON = require('./index.js');

require.extensions['.ajson'] = function (module, filename) {
  const file = fs.readFileSync(filename, 'utf8');
  const data = AJSON.parse(file);
  module.exports = data;
}