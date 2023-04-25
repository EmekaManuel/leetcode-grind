/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// The time complexity of the code is O(n^2) because there are two nested loops,
//  and the outer loop runs n times (where n is the length of nums),
//   and the inner loop runs n-i-1 times. Therefore, the total number
//    of iterations is (n * (n-1))/2 which is in the order of O(n^2).

// The space complexity of the code is O(1) because it uses a constant
// amount of extra space to store the loop counters and the output array.
// It doesn't create any additional data structures that grow with the size of input,
//  hence the space complexity is constant.
