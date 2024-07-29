// Question - 1:

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

//elements larger than a number num
function getElements(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}

getElements(arr, num);

// Question - 2:

let str = "abcdabcdefgggh";

//function to get string with all unique elements
function getUnique(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    // console.log(str[i]);
    if (ans.indexOf(currChar) == -1) {
      ans += currChar;
    }
  }
  return ans;
}

console.log(getUnique(str));

//Question - 3:

let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
  let ansIdx = 0;

  for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;

    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
  return country[ansIdx];
}

console.log(longestName(country));

// Question - 4:

let _str = "apnacollege";

function countVowels(_str) {
  let count = 0;

  for (let i = 0; i < _str.length; i++) {
    if (
      _str.charAt(i) == "a" ||
      _str.charAt(i) == "e" ||
      _str.charAt(i) == "i" ||
      _str.charAt(i) == "o" ||
      _str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(_str));

// Question - 5:

let start = 100;
let end = 200;

function getRandom(start, end) {
  diff = end - start;
  return Math.floor(Math.random() * diff) + 1;
}

console.log(getRandom(start, end));
