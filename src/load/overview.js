const fs = require('fs');
const path = require('path');
const dataPath = require('../dataPath.js');

/**
 * Loads overview data.
 *
 * @returns {Promise<Object>} Object containing overview information.
 */
const loadOverview = async () => {

  const filepath = path.resolve(dataPath, 'overview', 'overview.json');
  const data = JSON.parse((await fs.promises.readFile(filepath, 'utf8')));

  return data;
};

module.exports = loadOverview;
