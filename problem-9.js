// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5 :  1x2x3x4x5=120
// Output: 120

const num =5;
let fact = 1;

function getFactorial(num) {
    for (i = 1; i <= num; i++) {
        fact = fact * i;//1, 2, 6, 24,120
    }
    return fact;
}

const factorial=getFactorial(num)

console.log(factorial);