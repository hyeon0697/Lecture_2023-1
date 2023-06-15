const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

// 서버와의 연결이 설정되면 실행되는 이벤트 핸들러
ws.on('open', () => {
  console.log('Connected to the WebSocket server');

  // 메시지를 서버로 보내기
  ws.send('Hello, Server!');
});

// 서버로부터 메시지를 받으면 실행되는 이벤트 핸들러
ws.on('message', (message) => {
  console.log('Received message from server:', message);
});

// 연결 종료 시 실행되는 이벤트 핸들러
ws.on('close', () => {
  console.log('Disconnected from the WebSocket server');
});
