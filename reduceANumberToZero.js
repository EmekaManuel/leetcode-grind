/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num, count = 0) {
    // Recursion finished. We're all done!
    if (num === 0) return count;
    
    // Even, divide by two and recurse.
    if (num % 2 === 0)
    {
        return numberOfSteps(num / 2, count + 1);
    };
    
    // Odd, minus one and recurse.
    return numberOfSteps(num - 1, count + 1);
};

var numberOfSteps = function(num) {
    let steps = 0
    while(num !== 0){
        
        num % 2 == 0 ? num = num / 2 : num -=1 
          
        steps += 1
    }
    
    return steps
};
