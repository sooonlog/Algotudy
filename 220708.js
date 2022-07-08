// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하시오.

// 내 답안
const num = prompt('숫자를 입력하시오').split(' ');

let result = 1;
for(let i=1; i<=num[1];i++) {
  result *= num[0];
}

console.log(result);

// 답안
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
// Math.pow(base, exponent): base 에 exponent를 제곱한 값을 반환합니다.
