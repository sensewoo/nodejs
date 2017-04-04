var express = require('express'),
    app     = express();
    
var port = 8080,
    ip   = '0.0.0.0';

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
