function solution(my_string, n) {
    var answer = '';
    
    for (letter of my_string) {
        answer+=letter.repeat(n);
    }
    
    return answer;
}
