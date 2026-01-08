// Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

function findfVowels(str){
    let count =0;
    const char=str.split('');

    for(const item of char){
        // console.log(item);
        if(item==='a'|| item==='e'||item==='i'||item==='o'|| item==='u'){
            count++;
        }
    }
    return count;
}
const string= 'programming';
const vowels= findfVowels(string);
console.log(vowels)