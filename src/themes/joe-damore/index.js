const path = require('path');

module.exports = {
  template: path.resolve(__dirname, 'index.ejs'),
  style: path.resolve(__dirname, 'index.scss'),
  resources: path.resolve(__dirname, 'resources'),
};
