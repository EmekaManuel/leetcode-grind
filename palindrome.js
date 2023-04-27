/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x === 0) {
        return true;
    } else {
        const reverse = x.toString().split("").reverse().join("");
        // split convert array
        // reverse array
        // join return string
        if (x == reverse) {
            return true;
        }
        if (x != reverse) {
            return false;
        }
    }
};

