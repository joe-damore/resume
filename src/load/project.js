const fs = require('fs');
const path = require('path');
const dataPath = require('../dataPath.js');

/**
 * Loads project highlights data.
 *
 * @returns {Promise<Object>} Object containing project highlights.
 */
const loadProject = async () => {

  const filepaths = (await fs.promises.readdir(path.resolve(dataPath, 'projects')))
    .map((file) => {
      return path.resolve(dataPath, 'projects', file)
    });

  const data = (await Promise.all(filepaths
      .map(async (filepath) => {
        const data = await fs.promises.readFile(filepath, 'utf8');
        return JSON.parse(data);
      })
    ));

  return data;
};

module.exports = loadProject;
