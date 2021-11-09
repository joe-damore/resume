const fs = require('fs');
const path = require('path');
const dataPath = require('../dataPath.js');

/**
 * Loads experience data.
 *
 * @returns {Promise<Object>} Object containing experience information.
 */
const loadExperience = async () => {
  const filepaths = [
    'experience-levels.json',
    'experience.json',
  ];

  const data = await Promise.all(filepaths
    .map(async (filepath) => {
      const data = await fs.promises.readFile(path.resolve(dataPath, 'experience', filepath), 'utf8');
      return JSON.parse(data);
    })
  );

  return {
    levels: data[0],
    experience: data[1],
  };
};

module.exports = loadExperience;
