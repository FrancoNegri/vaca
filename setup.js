/*server.js*/
var fs = require('fs');
const http = require('http');
const hostname = '127.0.0.1';
const port = 2000;
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  fs.readFile("index.html", function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // if the file is found, set Content-type and send data
        res.setHeader('Content-type', map[ext] || 'text/plain' );
        res.end(data);
      }
    });
});
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});