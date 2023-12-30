// 입력
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

// 문제
/*
내 풀이
const result = input[0].split(" ").map((value) => Number(value.split("").reverse().join(""))).reduce((a, b) => Math.max(a, b));
*/
let num1 = input[0].split(' ')[0];
let num2 = input[0].split(' ')[1];

let newNum1 = num1[2] + num1[1] + num1[0]; 
let newNum2 = num2[2] + num2[1] + num2[0];

// 출력
console.log(Math.max(Number(newNum1), Number(newNum2)));
