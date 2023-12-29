// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

/*
내 풀이
// 분 단위로 자동적으로 계산
let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

let ovenMinute = Number(input[1].split(' ')[0]);

// 1. 현재 시각이 주어진 경우 ovenMinute 증가
// 2. 분이 60마다 넘어가면 시가 1 증가
// 3. 시가 24를 넘어가면 0으로 초기화
let totalMinute = minute + ovenMinute; 
if(parseInt(totalMinute / 60) > 0){
    hour += parseInt(totalMinute / 60);
    minute =  totalMinute % 60;
    if(hour >= 24) hour -= 24;
} else minute += ovenMinute;

console.log(hour + " " + minute); 
*/
// 문제 풀이 핵심 아이디어
// 입력 : A시 B분
// 걸리는 시간 : C분
// 1. 입력으로 주어진 시각을 "분"의 형태로 바꾸기
// 2. 분이 주어졌을 때, 시각을 알려주는 기능을 작성하기
let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

// 분의 형태로 바꾸기
let totalMinute = a * 60 + b + c; 

// 1440으로 나눈 나머지 취하기
totalMinute %= 1440;
// 60으로 나눈 몫을 시로 취하기
let hour = parseInt(totalMinute / 60);
// 60으로 나눈 나머지를 분으로 취하기
let minute = totalMinute % 60;

console.log(hour + " " + minute);

