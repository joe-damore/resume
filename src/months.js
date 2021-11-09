const assert = require('assert');

/*
 * Array of objects describing months.
 *
 * The order of the array corresponds with the order of months. For example,
 * the item at index 0 is January and the item at index 11 is December.
 */
const months = [
  {
    name: 'January',
    abbrev: 'Jan.',
  },
  {
    name: 'February',
    abbrev: 'Feb.',
  },
  {
    name: 'March',
    abbrev: 'Mar.',
  },
  {
    name: 'April',
    abbrev: 'Apr.',
  },
  {
    name: 'May',
    abbrev: 'May',
  },
  {
    name: 'June',
    abbrev: 'Jun.',
  },
  {
    name: 'July',
    abbrev: 'Jul.',
  },
  {
    name: 'August',
    abbrev: 'Aug.',
  },
  {
    name: 'September',
    abbrev: 'Sep.',
  },
  {
    name: 'October',
    abbrev: 'Oct.',
  },
  {
    name: 'November',
    abbrev: 'Nov.',
  },
  {
    name: 'December',
    abbrev: 'Dec.',
  },
];

/**
 * Returns the name of the month `monthNumber`.
 *
 * @param {number} monthNumber - Numeric representation of month. (Ex: 1 = January)
 *
 * @returns {string} Month name.
 */
const getMonthNameFromNumber = (monthNumber) => {
  assert(monthNumber > 0, 'Month number must not be less than 1');
  assert(monthNumber < 13, 'Month number must not be greater than 12');

  return months[monthNumber - 1].name;
}

/**
 * Returns the abbreviation of the month `monthNumber`.
 *
 * @param {number} monthNumber - Numeric representation of month. (Ex: 1 = January)
 *
 * @returns {string} Month abbreviation.
 */
const getMonthAbbrevFromNumber = (monthNumber) => {
  assert(monthNumber > 0, 'Month number must not be less than 1');
  assert(monthNumber < 13, 'Month number must not be greater than 12');

  return months[monthNumber - 1].abbrev;
}

module.exports = {
  months,
  getMonthNameFromNumber,
  getMonthAbbrevFromNumber,
};
