// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문제
// 첫째 줄에 시험 본 과목의 개수 N이 주어진다. 
// 시험 본 과목의 개수
let n = Number(input[0]);
// 원래 성적
let scores = input[1].split(' ').map(Number);
// 최대값
let max = Math.max(...scores);
// 조작 성적
let newScores = scores.map((value)=> (value / max) * 100);
// 총합
let sum = newScores.reduce((a, b) => a += b);
// 평균
let avg = sum / n;

// 출력
console.log(avg);