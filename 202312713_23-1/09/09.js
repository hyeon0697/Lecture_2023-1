var answer = `
일반함수
function add(a, b) {
    return a + b;
}
console.log(add(3, 5)); //8

화살표 함수
const add = (a, b) => a + b;
console.log(add(3, 5)); //8

위 코드에서 add 함수를 화살표 함수로 변환하였습니다. 
화살표 함수의 경우 함수 표현식으로만 사용할 수 있으며, 함수 내부에서 this 키워드는 자신이 속한 스코프의 this를 그대로 참조하므로 주의해야 합니다.
`


console.log(answer);