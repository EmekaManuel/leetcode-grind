/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let string = '';
    for(digit in digits){
      string += digits[digit];
    }
    digits = BigInt(string) + BigInt(1);
    return Array.from(String(digits), num => Number(num));
  };
  
