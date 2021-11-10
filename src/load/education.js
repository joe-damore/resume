const fs = require('fs');
const path = require('path');
const dataPath = require('../dataPath.js');

/**
 * Loads education data.
 *
 * @returns {Promise<Object>} Object containing education information.
 */
const loadEducation = async () => {
  const filepaths = [
    'high-school.json',
    'other.json',
  ];

  const data = await Promise.all(filepaths
    .map(async (filepath) => {
      const data = await fs.promises.readFile(path.resolve(dataPath, 'education', filepath), 'utf8');
      return JSON.parse(data);
    })
  );

  return {
    highSchool: data[0],
    other: data[1],
  }
};

module.exports = loadEducation;
