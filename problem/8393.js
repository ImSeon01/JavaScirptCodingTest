// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문제 : n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성
// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

let sum = 0;

// 방법 1
for(let i = 1; i <= n; i++){
    sum += i;
}

// 방법 2 : 등차수열의 함 공식을 이용
// 항의개수 n, 첫째항 a, 마지막 항이 l일 때 : sum = n(a + l) / 2

// 출력
console.log(sum);