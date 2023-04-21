const express = require('express');
const app = express();

// 루트 경로에 대한 요청 처리
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// '/login' 경로에 대한 요청 처리
app.get('/login', function(req, res) {
  res.send('Login Page');
});

// '/user' 경로에 대한 요청 처리
app.get('/user', function(req, res) {
  res.send('User Page');
});

// 서버 실행
app.listen(8080, function() {
  console.log('Server running on port 8080');
});
