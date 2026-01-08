// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

const num=5;
let fact=1;

for (i=1; i<=num; i++){
    fact=fact * i;
}
console.log(fact);