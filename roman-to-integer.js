/**
 * @param {string} value
 * @return {number}
 */

const romanToInteger = function(value) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const reverseArray = value.split("").reverse();
  let level = 0;
  let sum = 0;
  reverseArray.forEach((item) => {
    const newLevel = romanNumerals[item];
    if (newLevel >= level) {
      sum += newLevel;
      level = newLevel;
    } else {
      sum -= newLevel;
    }
  });
  console.log(sum);
  return sum;
};
