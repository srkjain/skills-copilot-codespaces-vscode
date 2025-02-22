// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   fs.readFile('./comments.html', (err, data) => {
//     res.end(data);
//   });
// });

// server.listen(3000);
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client. Handle the errors that may occur.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('404 Not Found');
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(3000);
console.log('Server listening on port 3000');