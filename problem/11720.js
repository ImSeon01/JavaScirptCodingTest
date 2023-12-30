// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성
/* 내 풀이
// 숫자의 개수
const numCount = Number(input[0]);
// 숫자 배열
const numList = input[1].split('').map(Number);
// 숫자의 합
const sum = numList.reduce((a, b) => a += b);
*/

let n = Number(input[0]);
let string = input[1];

let sum = 0;
for(let x of string){
    sum += Number(x);
}
// 출력
console.log(sum)