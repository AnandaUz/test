import http from 'http';
import { test } from '@base/server/test.js';

const PORT = 8080;

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello!');
});

server.listen(PORT, () => {

  test();
  console.log(`Server running on port ${PORT}`);
});