//Que.1 -> Write a JavaScript functions that returns array elements larger than number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElement(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElement(arr, num);

//Que.2 -> Write a JavaScript program to extract unique character from a given string. for example :- "abcdabcdefgggh", Ans. :- "abcdefgh".

let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = "";
    for(let i=0; i<str.length; i++) {
        let currentChar = str[i];
        if(ans.indexOf(currentChar) == -1) {
            ans += currentChar;
        }
    }
    return ans;
}

console.log(getUnique(str));

//Que.3 -> Write a JavaScript function that list of country names as input and returns the longest country name as output. 
//for example -> coutry = ["Australia", "Germany", "United States of America"], Ans. : "United States of America".

let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansInx = 0;
    for(let i=0; i<country.length; i++) {
        let ansLen = country[ansInx].length;
        let currLen = country[i].length;
        if(currLen > ansLen) {
            ansInx += i;
        }
    }
    return country[ansInx];
}

console.log(longestName(country));

//Que.4 -> Write a JavaScript function to count the number of vowels in a string.

let string = "abcdefghijklmnopqrstuvwxyz";

function countVowel(string) {
    let count = 0;
    for(let i=0; i<string.length; i++) {
        if( string.charAt(i) == 'a' || 
            string.charAt(i) == 'e' ||
            string.charAt(i) == 'i' ||
            string.charAt(i) == 'o' ||
            string.charAt(i) == 'u') {
                count++;
            }
    }
    return count;
}

console.log(countVowel(string));

//Que.5 -> Write a JavaScript function to generate a random number within a range(Start, End).

let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start, end));