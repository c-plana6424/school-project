const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const file = `./public${url}`;
  fs.readFile(file, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error loading HTML page');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
