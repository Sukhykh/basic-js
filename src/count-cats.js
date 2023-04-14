const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counter = 0;
  console.log(matrix);
  console.log(matrix.flat(Infinity))
  matrix.flat(Infinity).forEach(el => el === '^^' ? counter++ : counter);
  
  return counter
}

module.exports = {
  countCats
};
