// 이벤트 모듈 불러오기
const events = require('events');

// EventEmitter 객체 생성
const eventEmitter = new events.EventEmitter();

// 이벤트 리스너 등록
eventEmitter.on('myEvent', (order) => {
  console.log(`이벤트가 발생했습니다! (${order}번째 이벤트)`);
  answer.push(order);
});

// 이벤트 발생시키기
const answer = [];
for (let i = 1; i <= 5; i++) {
  eventEmitter.emit('myEvent', i);
}

console.log('answer: ', answer);
console.log('프로그램 종료');
