function solution(array, height) {
    var answer = 0;
    for (let el of array) {
        if (el > height) answer+=1;
    }
    return answer;
}