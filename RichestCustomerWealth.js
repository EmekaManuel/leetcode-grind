// Intuition
// The goal of this function is to find the maximum wealth among a group of people. 
//The input is an array of arrays, where each inner array represents the wealth of one person.
// To find the maximum wealth, the function iterates through each inner array,
// calculates the sum of its elements, and checks if it's greater than the current maximum wealth.
// If it is, the function updates the maximum wealth to the new sum.
// Finally, the function returns the maximum wealth.

// Approach
// The approach taken by this function is a straightforward iterative algorithm.
// It uses a loop to iterate through each inner array of the input array and calculates
// the sum of its elements using the reduce method. The forEach method is used to iterate
// through the input array and update the maximum wealth if a new maximum is found.
// This approach has a time complexity of O(n^2), where n is the length of the input array,
// as it requires iterating through each inner array and each element within it.

// Complexity
// The time complexity of this function is O(n^2), where n is the length of the input array.
// This is because the function uses a loop to iterate through each inner array and calculates
// the sum of its elements using the reduce method, which has a time complexity of O(n).
// Therefore, the overall time complexity of the function is O(n^2).
// However, the space complexity of this function is O(1) as it does not use any additional
// data structures that scale with the input size.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
  
    accounts.forEach((element) => {
      let sum = element.reduce(function (x, y) {
        return x + y;
      }, 0);
      if (max < sum) max = sum;
    });
  
    return max;
  };
