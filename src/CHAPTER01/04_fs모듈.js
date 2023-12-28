// fs 모듈
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);