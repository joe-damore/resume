const fs = require('fs');
const path = require('path');
const dataPath = require('../dataPath.js');

/**
 * Loads social media data.
 *
 * @returns {Promise<Object>} Object containing social media information.
 */
const loadSocialMedia = async () => {

  const filepaths = (await fs.promises.readdir(path.resolve(dataPath, 'social-media')))
    .map((file) => {
      return path.resolve(dataPath, 'social-media', file)
    });

  const data = (await Promise.all(filepaths
      .map(async (filepath) => {
        const data = await fs.promises.readFile(filepath, 'utf8');
        return JSON.parse(data);
      })
    ));

  return data;
};

module.exports = loadSocialMedia;
