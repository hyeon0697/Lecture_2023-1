// 웹 API 서버
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET /api/hello 요청에 대한 핸들러
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// POST /api/greet 요청에 대한 핸들러
app.post('/api/greet', (req, res) => {
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ error: 'Name is required.' });
  } else {
    res.json({ message: `Hello, ${name}!` });
  }
});

app.listen(port, () => {
  console.log(`Web API server is running on http://localhost:${port}`);
});

// 웹 소켓 프로그램
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const clients = [];

// 웹 소켓 연결 시 이벤트 핸들러
wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  // 클라이언트를 배열에 추가
  clients.push(ws);

  // 클라이언트에게 연결 성공 메시지 전송
  ws.send('Connected to the WebSocket server');

  // 메시지 수신 시 이벤트 핸들러
  ws.on('message', (message) => {
    console.log('Received message:', message);

    // 수신한 메시지를 다른 클라이언트에게 브로드캐스트
    broadcastMessage(message);
  });

  // 연결 종료 시 이벤트 핸들러
  ws.on('close', () => {
    console.log('WebSocket disconnected');

    // 클라이언트를 배열에서 제거
    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });
});

// 모든 클라이언트에게 메시지 브로드캐스트
function broadcastMessage(message) {
  clients.forEach((client) => {
    client.send(message);
  });
}
