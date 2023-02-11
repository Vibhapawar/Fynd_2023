var http = require('http'); 

var dt = require('./main2.js'); 

http.createServer(function(req,res) { 

    res.writeHead(200,{'Content-Type': 'text/html'});
    
    res.write('SERVER1');
    res.end(); 
}).listen(8001);