### 배열에 있는 문자형을 숫자형으로 반환
```javaScript
const strArr = ["1", "2", "3"];
const [num1, num2, num3] = strArr.map(Number);
console.log(num1, num2, num3);// 1, 2, 3
```
### 배열에 있는 모든 값에 2를 곱해서 반환1
```javaScript
const arr = [1, 2, 3];
const res1 = arr.map((value) => {
	return value * 2
});
console.log(res1); // [2, 4, 6]
```
### 배열에 있는 모든 값에 2를 곱해서 반환2
```javaScript
const arr = [1, 2, 3];
const res2 = arr.map((value) => value * 2);
console.log(res2); // [2, 4, 6]
```

### 배열의 인덱스 반환
```javaScript
const arr = [1, 2, 3];
const res3 = arr.map((value, index) => index );
console.log(res3); // [0, 1, 2]
```
### 객체에서 특정 값만 추출하여 반환
```javaScript
const items = [{id:1, name:'Lee'}, {id:2, name:'Kim'}];
const res4 = items.map((item) => {
	return {id : item.id}
});
console.log(res4);
// [{"id": 1},{"id": 2}]
```