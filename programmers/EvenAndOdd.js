function solution(num) {
    let answer = "";
    answer = num % 2 ? 'Odd' : 'Even';
    return answer;   
}

const EvenNum = 2;
const OddNum = 1;

console.log(solution(EvenNum));//Even
console.log(solution(OddNum));//Odd


