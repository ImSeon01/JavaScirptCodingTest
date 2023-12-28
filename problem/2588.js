// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
/*
내 풀이
const first = Number(input[0]);
const second = input[1];

// 연산
const third = first * Number(second[2]);
const forth = first * Number(second[1]);
const fifth = first * Number(second[0]);

const result = third + forth * 10 + fifth * 100;

// 출력
console.log(third);
console.log(forth);
console.log(fifth);
console.log(result);
*/

// 세 자리 수 두 개가 주어진다
// 문자열로 처리하면, 각 자릿수를 손쉽게 얻어 처리할 수 있음

const a = Number(input[0]);
const b = input[1];

const x_1 = Number(b[2]); // 일의자리
const x_2 = Number(b[1]); // 십의자리
const x_3 = Number(b[0]); // 백의자리

console.log(a * x_1);
console.log(a * x_2);
console.log(a * x_3);
console.log(a * Number(b));