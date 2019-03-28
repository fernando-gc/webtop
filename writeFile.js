var fs = require('fs');
var file = 'test.txt';
var texto = 'Hay aqui mucho texto\n';

fs.writeFile(file, texto, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
