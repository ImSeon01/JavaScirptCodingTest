// 입력
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문제 : 그룹 단어
const n = Number(input[0]);
let count = 0;

// 그룹 단어인지 체크하는 함수
const check = (data) => {
    let setData = new Set(data[0]);
    for(let i = 0; i < data.length - 1; i++){
        // 오릉쪽 단어와 다르다면
        if(data[i] != data[i + 1]){
            // 이미 등장한 적 있는 알파벳이라면
            if(setData.has(data[i+1])){
                return false;
            }
            else {
                setData.add(data[i+1]);
            }
        }
    }
    return true;
}

for(let i = 1; i <= n; i++){
    let data = input[i];
    if(check(data)) count++;
}
console.log(count);
