function solution(array, commands) {
    const answer = [];
    for(i = 0 ; i < commands.length; i ++){
        var sliceList = array.slice(commands[i][0]-1,commands[i][1]);
        sliceList.sort((a,b) => {
            return a - b
        });
        console.log('슬라이스하고 정렬', sliceList);
        console.log(commands[i])
        answer.push(sliceList[commands[i][2]-1])
    }

    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	);
