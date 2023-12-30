// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 문제
// 문제 풀이 핵심 아이디어
// 모든 줄에 대한 정보를 하나의 문자열에 담았다가 한꺼번에 출력
let n = Number(input[0]);
let result = '';

for(let i = 1; i <= n; i++){
    const [num1, num2] = input[i].split(' ').map(Number);
    const sum = num1 + num2;
    result += sum + '\n';
}
// 출력
console.log(result);