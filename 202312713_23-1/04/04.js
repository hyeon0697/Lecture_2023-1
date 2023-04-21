const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  const filePath = path.join(__dirname, '04.html');

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(500);
      response.end('Error loading 04.html');
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(content, 'utf-8');
    }
  });
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});

var answer = http;
console.log(answer);