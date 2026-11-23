import http from 'node:http';

const page = `<title>repro</title>
<h1>repro</h1>
<button>Go</button>
<label>Avatar <input type="file"></label>
<label>Email <input type="email"></label>`;

http
  .createServer((_req, res) => {
    res.setHeader('content-type', 'text/html');
    res.end(page);
  })
  .listen(4399, '127.0.0.1');
