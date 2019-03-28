var express = require('express'),
    fs = require('fs')
    url = require('url');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.post('/receive', function(request, respond) {
    var body = '';
    filePath = '/tmp/data.txt';
    request.on('data', function(data) {
        body += data;
        console.log("hay algo");
    });

    request.on('end', function (){
        fs.appendFile(filePath, body, function() {
            respond.end();
        });
    });
});

app.listen(8080);
console.log("Server started... port: 8080");
