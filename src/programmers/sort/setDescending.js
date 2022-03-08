const solution = (s) =>  {
    const answer = s.split("")//문자열 -> 배열, 철자 하나씩 배열의 아이템으로 쪼개기
    .sort()//배열을 오름차순 정렬
    .reverse()//내림차순 정렬
    .join("");//배열 -> 문자열, 구분자 없이 배열의 요소들을 하나의 문자열로 변환
    return answer;
}
