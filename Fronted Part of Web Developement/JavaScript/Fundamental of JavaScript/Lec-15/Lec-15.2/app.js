// Question - 1

let arr = [7, 9, 0, -2];
let n = 3;

console.log(arr.splice(n));
console.log(arr);

// Question - 2

let arrCopy = [7, 9, 0, -2];
console.log(arrCopy.length);
console.log(arrCopy.splice(arrCopy.length - n));

// Question - 3

let str = "";

if(str.length == 0){
    console.log("String is empty");
}
else {
    console.log("String is not empty");
}

// Question - 4

let strCpy = "CoDEmAn";
let idx = 3;

if(strCpy[idx] == strCpy[idx].toLowerCase()){
    console.log("Element exists at idx is in lower case.");
} else {
    console.log("Element exists at idx is in upper case.");
}

// Question - 5

let string = "    Hello Jii...  ";
console.log(string.trim());

// Question - 6

let array = ["nachiket", "rudra", "bob", "tony"];
let q = "none";
if(array.includes(q) == true){
    console.log("array element is exist in an array.");
}
else {
    console.log("array element is not exist in an array.");
}