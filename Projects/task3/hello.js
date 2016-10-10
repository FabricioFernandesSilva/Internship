var http = require('http');
var json = JSON.stringify({hello : "from the otherside"});
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"content-type" : "application/json"});
    response.end (json);
});
console.log('Listening on http//:localhost:8000');
server.listen(8000);
