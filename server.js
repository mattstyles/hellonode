var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello node.')
  res.end();
}).listen(3000);


console.log('> http server has started on port 3000');
