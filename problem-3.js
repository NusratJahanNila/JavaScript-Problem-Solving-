// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function getPalindrome(str){
    // get reverse
    let revStr= str.split('').reverse("").join("");
    //if both are equal
    if (str===revStr){
        return true;
    }
    return false;
}
const isPalindrome=getPalindrome("madam");
console.log(isPalindrome);