// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9
const numbers=[5,1,9,3];

function getLargest(numbers){
    let largest=numbers[0];
    for(const num of numbers){
        if(num>largest){
            largest=num;
        }
    }
    return largest;
}

const largestNum=getLargest(numbers)
console.log(largestNum);