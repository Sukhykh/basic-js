const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const naturalLogarithm = 0.693;

  if (typeof sampleActivity !== 'string') return false;
  if (isNaN(parseFloat(sampleActivity))) return false;

  const activity = parseFloat(sampleActivity);

  if (activity <= 0) return false;
  if (activity > MODERN_ACTIVITY) return false;
  
  const activityRatio = Math.log(MODERN_ACTIVITY / activity);
  const decayConstant = naturalLogarithm / HALF_LIFE_PERIOD;
  const age = activityRatio / decayConstant;

  return Math.ceil(age)
}

module.exports = {
  dateSample
};
