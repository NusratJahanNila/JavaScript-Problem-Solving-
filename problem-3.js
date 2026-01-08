// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function getPalindrome(str){
    // reverse 
    let reversed=str.split("").reverse("").join("");
    // same or not
    if(str===reversed){
        return true;
    }
    return false;
}
const isPalindrome=getPalindrome("madam");
console.log(isPalindrome);