function solution(p, c) {
    p.sort();
    c.sort();
    for(i = 0 ; i <= c.length; i ++){
        if(p[i] !== c[i-1]){
            var answer = p[i];
        }
    }
    return answer;
}