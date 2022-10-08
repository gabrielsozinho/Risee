var http = require('http');

    var server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

        if (req.url == "/"){
            res.write("<h1>Welcome to Risee!</h1>");
        } else if (req.url == "/login") {
            res.write("<h1>Login to Risee</h1>");
        } else{
            res.write("<h1>404 error</h1>")
        }
        
        
        res.end();
    });

    server.listen(1337);