// Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

function findVowels(str){
    let count =0;
    const char=str.split('');
    // console.log(char);

    for(const item of char){
        if(item==='a'|| item==='e'||item==='i'||item==='o'|| item==='u'){
            count++;//1,2,3
        }
    }
    return count;
}
const string= 'programming';
const vowels= findVowels(string);
console.log(vowels)