// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function evenNumbers(array){
    const even=[];
    for(const num of array){
        if(num%2===0){
            // console.log(num);
            even.push(num);
        }    
    }
    return even;
}
const arr=[1, 2, 3, 4, 5, 6];
const result=evenNumbers(arr);
console.log(result);