function solution(id_list, report, k) {
  const answer = [];
  // 신고한 id를 기록하는 객체 초기화 
  const reportedId = {};
  
  for(const id of id_list) {
      reportedId[id] = [];
      answer.push(0);
  }
  
  //report 배열 순회
  for(const rp of report) {
      // 공백 기준으로 쪼개기 위해 split 사용
      // idReport: 신고자, idReported: 신고당한자
      const [idReport, idReported] = rp.split(' ');
      
      // 해당 배열을 중복신고인지 확인 후 reportedId 객체에 저장
      if(!reportedId[idReported].includes(idReport)) {
          reportedId[idReported].push(idReport)
      }
  }
  
  // 신고메일 전송
  for(const id of id_list) {
      // k번 이상 신고한 경우
      if(reportedId[id].length >=  k) {
          for(const count of reportedId[id]) {
              answer[id_list.indexOf(count)] += 1;
          }
      }
  }
  
  return answer;
}

// 참고 
// https://greedysiru.tistory.com/854