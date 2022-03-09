function solution(phone_number) {
    //정규식
      let answer = phone_number.replace(/\d(?=\d{4})/g, '*')
      // \d : 숫자를 찾고, (?=\d{4}):  x(?=y) x 뒤에 y가 나오고(숫자 4개), x에 해당되는 것만 간주
      // /g : global match 모든 문자열에 적용
    return answer 
  }