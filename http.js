var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == '/home'){
        fs.readFile('main.html', 'utf8', err, htmlContent) = {
            if(err) {
                console.error(err);
                res.end('<html><body><h1>Erro ao carregar o arquivo</h1></body></html>');
            }
        }
    
    }
  }).listen(8080)