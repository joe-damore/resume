const fs = require('fs');
const path = require('path');
const dataPath = require('../dataPath.js');

/**
 * Loads contact data.
 *
 * @returns {Promise<Object>} Object containing contact information.
 */
const loadContact = async () => {

  const filepaths = (await fs.promises.readdir(path.resolve(dataPath, 'contact')))
    .map((file) => {
      return path.resolve(dataPath, 'contact', file)
    });

  const data = (await Promise.all(filepaths
      .map(async (filepath) => {
        const data = await fs.promises.readFile(filepath, 'utf8');
        return JSON.parse(data);
      })
    ));

  return data;
};

module.exports = loadContact;
