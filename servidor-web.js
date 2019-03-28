var http = require('http');
var fs = require('fs');
var file = 'log.txt';
var log = 'Peticion Recibida.';

function onRequest(request, response) {
  console.log(log);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("DESARROLLO DE PETICION");
  response.end();
  fs.writeFile(file, log);
}

var server = http.createServer(onRequest);

server.listen(8080);

console.log("Servidor funcionando en http://localhost:8080/");
