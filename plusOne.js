/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let string = "";
  for (let digit in digits) {
    string += digits[digit];
  }
  digits = BigInt(string) + BigInt(1);
  return Array.from(String(digits), (num) => Number(num));
};