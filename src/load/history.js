const fs = require('fs');
const path = require('path');
const dataPath = require('../dataPath.js');
const months = require('../months.js');

/**
 * Loads work history data.
 *
 * @returns {Promise<Object>} Object containing work history information.
 */
const loadHistory = async () => {

  const filepaths = (await fs.promises.readdir(path.resolve(dataPath, 'history')))
    .map((file) => {
      return path.resolve(dataPath, 'history', file)
    });

  const data = (await Promise.all(filepaths
      .map(async (filepath) => {
        const data = await fs.promises.readFile(filepath, 'utf8');
        const object = JSON.parse(data);
        const getFriendlyDate = (month, year, abbrev = false) => {
          if (!month || !year) {
            return 'Current';
          }
          if (abbrev) {
            return `${months.getMonthAbbrevFromNumber(month)} ${year}`;
          }
          return `${months.getMonthNameFromNumber(month)} ${year}`;
        };

        object['startFriendly'] = getFriendlyDate(object.startMonth, object.startYear);
        object['startFriendlyAbbrev'] = getFriendlyDate(object.startMonth, object.startYear, true);
        object['endFriendly'] = getFriendlyDate(object.endMonth, object.endYear);
        object['endFriendlyAbbrev'] = getFriendlyDate(object.endMonth, object.endYear, true);

        return object;
      })
    ))
    .sort((a, b) => {
      const dateA = (a.startYear * 100) + a.startMonth;
      const dateB = (b.startYear * 100) + b.startMonth;

      return -(dateA - dateB);
    });

  return data;
};

module.exports = loadHistory;
