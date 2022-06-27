// 문장이 입력되면 거꾸로 출력하는 프로그램

const str = prompt('문장을 입력하세요');

const rev = str.split('').reverse().join('');
// split(''): 문자열을 배열로 반환
// reverse(): 배열의 순서를 반전
// join(''): 원소를 문자열로 반환

console.log(rev);