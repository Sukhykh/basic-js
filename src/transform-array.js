const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!")
  
  const result = [];

  arr.forEach((element, index) => {
    if (element === '--discard-next') {
      result.push('remove');
    } else if (arr[index - 1] === '--discard-next') {
      result.push('remove');
    } else if (element === '--discard-prev') {
      result.push('remove');
      if (index > 0) {
        result[index - 1] = 'remove';
      }
    } else if (element === '--double-next') {
      if (!isNaN(arr[index + 1])) {
        result.push(arr[index + 1])
      } else {
        result.push('remove')
      }
    } else if (element === '--double-prev') {
      if (result[index - 1]) {
        result.push(result[index - 1])
      } else {
        result.push('remove')
      }
    } else {
      result.push(element);
    }
  })
  return result.filter(element => element !== 'remove');

  // let arrChanger = false;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === '--discard-next') {
  //     i++;
  //   } else if (arr[i] === '--discard-prev') {
  //     if (arrChanger === false && result.length > 0) {
  //       result.pop();
  //     }
  //   } else if (arr[i] === '--double-next') {
  //     if (i < arr.length - 1 && !isNaN(arr[i + 1])) {
  //       result.push(arr[i + 1]);
  //     }
  //   } else if (arr[i] === '--double-prev') {
  //     if (arrChanger === false && result.length > 0) {
  //       result.push(arr[i - 1]);
  //     }
  //   } else {
  //     result.push(arr[i]);
  //   }

  //   if (arr[i] === '--discard-next' || arr[i] === '--discard-prev') {
  //     arrChanger = true;
  //   } else {
  //     arrChanger = false;
  //   }  
  // }
  return result;
}

module.exports = {
  transform
};
