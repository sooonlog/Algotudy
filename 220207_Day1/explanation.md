입력값
---
- `id-list` : 이용자 id 값이 담긴 문자열 배열
- `report` : 신고한 id 정보 -> "이용자id 신고한id" 형태의 문자열
- `k` : 신고횟수 -> 자연수

      
출력값
---
- `answer` : 유저별로 처리결과 메일 받은 횟수를 배열로 return

      
기능
---
- 동일유저의 반복 신고 -> 1회로 처리
- k번 이상 신고 -> `answer`에 `id-list` 순으로 count +1 

    
참고
---
- [2022 KAKAO 비공식 해설 영상](https://www.youtube.com/watch?v=caGtdr3_nxs&t=246s)

후기
---
- JS Map, Set에 대한 공부를 다시 해야겠다
- 어려워서 다른 코드를 참고해서 풀었고, 다음주에 스스로의 힘으로 풀 수 있도록 할 것!