function solution(n, t) {  // 7마리가 1시간 마다 2배로 증가한다,  15시간 후면 몇 마리일까?
    let answer = n;
    
    let hours = t;
    while (hours > 0) {
        answer *=2;
        hours--;
    }
    
    return answer;
}
