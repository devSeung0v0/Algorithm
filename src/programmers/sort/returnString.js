function solution(n) {
    var answer = '수박';
    return answer.repeat(n).substring(0,n);
}


//answer.repeat(n) 까지는 '수박' 문자열을 반복하고,
//.substring(0,n);을 붙여서 '수박' * n번 문자열의 시작 인덱스부터 n-1번 인덱스까지 반환
console.log(solution(3))//'수박수'