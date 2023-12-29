// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문제 : "45분 일찍 알람 설정하기"
// 문제 풀이 핵심 아이디어
// 1. 현재 시간이 주어졌을 때, 45분을 감소시킨다.
// 2. 0분보다 작아지면, 시가 1시간 감소한다
// 3. 0시보다 작아지면, 시가 23시로 초기화된다.
let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

if(minute < 45) { // 분이 45분 미만일 때
    hour -= 1;
    minute += 15;
    if(hour < 0) hour = 23;
}
else minute -= 45;

// 출력
console.log(hour + " " + minute);