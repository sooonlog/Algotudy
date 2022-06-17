// 아래 출력이 나오도록 코드를 작성하세요
// 입력값: 5

// 출력값
//     *
//    ***
//   *****
//  *******
// *********

const line = prompt('라인 수는?');

let tree = '';

for(let i=1; i<=line; i++){
  let star = '';
  for(let j=1; j<=line-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);