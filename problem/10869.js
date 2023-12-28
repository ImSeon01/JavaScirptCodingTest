// 입력
// fs 모듈을 사용하여 파일을 문자열로 반환
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// ["1", "2"]
const line = input[0].split(' ');

const a = Number(line[0]);
const b = Number(line[1]);

// 문제
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 값 구하기
let result = '';
result += (a + b) + '\n';
result += (a - b) + '\n';
result += (a * b) + '\n';
result += (parseInt(a / b)) + '\n';
result += (a % b);

// 출력
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력
console.log(result);