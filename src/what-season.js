const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  const errors = ['Unable to determine the time of year!', 'Invalid date!'];
  
  if (!date) return errors[0];

  if (typeof date !== "object") throw new Error(errors[1]);
  if (!date.getMonth) throw new Error(errors[1]);
  if (Object.getOwnPropertyNames(date).length > 0) throw new Error(errors[1]);

  if (date.getMonth() > 10) return seasons[3];
  if (date.getMonth() > 7) return seasons[2];
  if (date.getMonth() > 4) return seasons[1];
  if (date.getMonth() > 1) return seasons[0];

  return seasons[3];
}

module.exports = {
  getSeason
};
