// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

const numbers=[1, 2, 3, 4]

function getSum(numbers){
    let sum=0;
    for(const number of numbers){
        sum=sum+number
    }
    return sum;
}
const total=getSum(numbers);
console.log(total);