var http = require("http");

//Server 1
http.createServer(function (request, response) {

  response.writeHead(200, {'Content-Type': 'text'});
  response.end('Your code is dirty.');

}).listen(7500);

console.log('Server running at http://localhost:7500/');

//Server 2
http.createServer(function (request, response){

  response.writeHead(200, {'Content-Type': 'text'});
  response.end('Your code is clean.')

}).listen(7000);

console.log('Server running at http://localhost:7000/')