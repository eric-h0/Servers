var http = require("http");

http.createServer(function (request, response) {

  response.writeHead(200, {'Content-Type': 'text'});
  response.end('Ayyyy, this works!!!');

}).listen(3000);
console.log("Test");

// Console will print the message
console.log('Server running at http://localhost:3000/');