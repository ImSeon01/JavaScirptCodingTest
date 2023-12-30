// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문제
// 핵심 아이디어
// 배열의 원소를 하나씩 확인하여, 최댓값과 최솟갑을 찾는 문제   
const num = Number(input[0]);
const intArr = input[1].split(' ').map(Number);
/*
내 풀이
const min = Math.min(...intArr);
const max = Math.max(...intArr);
*/

/*
// 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수
// 일단 큰 수, 작은 수로 초기화
let min = 1000001;
let max = -1000001;

for(let i = 0; i < intArr.length; i++){
    let currentValue = intArr[i];
    min = (currentValue < min) ? currentValue : min;
    max = (currentValue > max) ? currentValue : max;
}
*/

// reduce를 이용하여 해결
let min = intArr.reduce((a, b) => Math.min(a, b));
let max = intArr.reduce((a, b) => Math.max(a, b));

// 출력
console.log(min, max);