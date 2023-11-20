let arr = [7, 9, 0, -2];
let n = 3;

arr.splice(n);
console.log(arr);
//2nd Ans.
console.log(arr.splice(arr.length - n));

let str = "";

if(str.length == 0){
    console.log("String is empty");
}
else {
    console.log("String is not empty");
}

let char = 'S';

if(char.toLowerCase() == char){
    console.log("Given character is in lower case.");
}
else {
    console.log("Given character is in upper case.");
}

let string = "    Hello Jii...  ";
console.log(string.trim());

let array = ["nachiket", "rudra", "bob", "tony"];
let q = "nachiket";
if(array.includes(q) == true){
    console.log("array element is exist in an array.");
}
else {
    console.log("array element is not exist in an array.");
}