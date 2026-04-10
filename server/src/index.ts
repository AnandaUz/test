import http from 'http';
import { a } from './a/a.js';

import { test } from './base_server/test.js';

console.log(a);

const PORT = 8080;

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello!');
});

server.listen(PORT, () => {

  test();
  console.log(`Server running on port ${PORT}`);
});