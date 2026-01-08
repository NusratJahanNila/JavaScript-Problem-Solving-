// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]


function noDuplicate(array){
    let unique=[];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
const duplicateArray=[1, 2, 2, 3, 4, 4];
const unique =noDuplicate(duplicateArray);
console.log(unique);