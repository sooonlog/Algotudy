// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

// 내가 생각한 답
function eName(kName) {
  const kPlanet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
  const ePlanet = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  for(let i=0; i<kPlanet.length; i++){
    if(kName==kPlanet[i])
      console.log(ePlanet[i])
  }
}

const pName = prompt('행성의 이름을 입력하세요');
eName(pName);

// 답안
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);

// 느낀점
// 구조분해할당을 통해 변수를 선언하는 것을 의도한 문제였는데, 해당 개념을 많이 사용해본적이 없어서 생각이 안났던 것 같다.
// 오늘 문제를 통해 다시한번 개념을 잡을 수 있었고 주말에 해당 내용을 다시 정리해야하겠다.
// https://learnjs.vlpt.us/useful/06-destructuring.html
