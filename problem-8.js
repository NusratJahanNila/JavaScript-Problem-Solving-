// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

const strings="hello world";

function getCapital(strings){
    let result = strings.split(" ").map(str=>{
        return str[0].toUpperCase()+str.slice(1)
    }).join(" ")
    return result;
}
const capital=getCapital(strings);
console.log(capital);