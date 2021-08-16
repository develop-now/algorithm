let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const length = alphabet.length;
const inputnum = 703; // 입력된 값
let result = '';

let startN = 0;
let lastN = length;
let loop = 1; // loop돌리기
let j = 0; // 자리수
while (loop > 0) {
  j++;
  if (startN <= inputnum && inputnum <= lastN) {
    break;
  }
  startN = lastN + 1;
  lastN = lastN * length + length;
}

while (j > 0) {
  let scope = 1;
  for (let i = 1; i <= j - 1; i++) {
    scope = scope * length;
  }
  let first = startN;
  for (let i = 0; i <= length; i++) {
    let second = first + scope;
    if (j === 1 && first <= inputnum && inputnum < second) {
      result = result + alphabet[i];
      break;
    }
    if (first <= inputnum && inputnum < second) {
      result = result + alphabet[i];
      startN = first;
      break;
    } else {
      first = second;
    }
  }
  j--;
}
console.log(`${inputnum}번째 index : ${result}`);
