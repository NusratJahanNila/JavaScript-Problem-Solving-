// Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"
function revStr(str){
    let newStr= str.split('').reverse("").join("");
    return newStr;
}
const reversedString=revStr("hello")
console.log(reversedString);