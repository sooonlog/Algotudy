// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

function area(n){
  const result = n*n*3.14;
  return result;
}

const n = Number(prompt('정수를 입력하세요.'));
console.log(area(n));
