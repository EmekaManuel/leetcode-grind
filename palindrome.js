/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  const str = x.toString();
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    if (str.charAt(leftIndex) !== str.charAt(rightIndex)) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
};
