//이전 풀이
// function solution(arr) {
//     var answer = 0;
//     for(var i = 0; i < arr.length; i ++){
//         answer += arr[i];
//     }

//     return answer / arr.length;
// }

//새로운 풀이 - reduce 연산자 사용
function solution(arr) {
    const answer = arr.reduce((prev,curr) => prev + curr) / arr.length
    
    return answer;
}
