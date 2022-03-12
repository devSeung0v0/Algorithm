function solution(s) {
  answer = (s.length === 4 || s.length === 6)//조건 1) 길이가 4 또는 6 AND
  && (!isNaN(s) && !s.includes('e'))//조건 2) 숫자이고, 지수로 쓰이는 e를 포함하지 않는 문자열
  ? true : false

  return answer
}