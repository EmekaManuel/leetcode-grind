/* 
INTUITION:

1. Count the number of 1's and make a frequency map that stores indexes in array
2. We can get the count of 1's simply by using lastIndexOf(1) + 1
3. We check if we have the count in our map. 
		if yes then push this index else 
		make new entry in map and store the current index

let mat=[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]],k=3
 now our freqMap will look like 
let freqMap = {
	'1': [2],
	'2': [0, 3],
	'4': [1],
	'5': [4]
};
Note: Key above are count of 1's and values are the indexes where count of 1's are equal

4. Now we flatten the values array to get simple array as
	[2,0,3,1,4] 
5. simply return k indexes of this array using slice(0,k)
*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function (mat, k) {
	//Step 1:
	let freqMap = {};
	for (let i = 0; i < mat.length; i++) {
		// Step 2:
		let count = mat[i].lastIndexOf(1) + 1;
		// Step 3:
		if (freqMap[count] !== undefined) {
			freqMap[count] = [...freqMap[count], i];
		} else {
			freqMap[count] = [i];
		}
	}
	// Step 4 & 5
	return Object.values(freqMap)
		.reduce((arr, itm) => {
			arr = [...arr, ...itm];
			return arr;
		}, [])
		.slice(0, k);
};