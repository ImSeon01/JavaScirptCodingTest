// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// ["1", "2"]
let line = input[0].split(' ');

let result;

let a = Number(line[0]); // 1
let b = Number(line[1]); // 2

result = a + b;

// 결과 출력
console.log(result);