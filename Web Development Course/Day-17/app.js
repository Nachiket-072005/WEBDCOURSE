let arr = [1, 2, 3, 4, 5];

//First Method
let print = function(el) {
    console.log(el);
};

arr.forEach(print);

//Second Method

arr.forEach( function(el) {
    console.log(el);
});

//Third Method
arr.forEach( (el) => {
    console.log(el);
});


let array = [{
    name: "Nachiket",
    marks: 95
}, 
{
    name: "Karan",
    marks: 94
}, 
{
    name: "Het",
    marks: 98
}];

array.forEach( (students) => {
    console.log(students.marks)
});

let CGPA = array.map( (el) => {
    return el.marks/10;
});

//Map Function
let num = [1, 2, 3, 4];

let double = num.map( (el) => {
    return el * el;
});

//Filter Function

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = nums.filter( (el) => {
    return el % 2 == 0;         //Even -> true, Odd -> false
});

//Every Function

let newArr = [1, 3, 5];

let ev = newArr.every( (el) => {
    return el % 2 != 0;
});

//Some Function

let reArr = [1, 3, 5];

let t = reArr.some( (el) => {
    return el % 2 == 0;
});

//Reduce Function
let no = [1, 2, 3, 4];

let finalVal = no.reduce( (res, el) => {
    console.log(res);   
    return (res + el)});
console.log(finalVal);

//Maximum in array

let tArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = tArr.reduce( (max, el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
});

// for(let i=0; i<tArr.length; i++) {
//     if(max < tArr[i]) {
//         max = tArr[i];
//     }
// }

console.log(max);

//Practice Questions 1
let number = [10, 20, 30, 40, 5];

let ans = number.reduce( (el) => el % 10 == 0);
console.log(ans);

//Practice Questions 2

function getMin(number) {
    let min = number.reduce( (min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    });

    return min;
}

// console.log(min);

console.log(getMin(number));



