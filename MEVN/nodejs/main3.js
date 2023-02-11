var http=require('http'); 
var dt=require('./main1'); 
http.createServer(function(req,res){ 

    res.writeHead(200,{'Content-Type':'text/html'});
    
    res.write('SERVER');
    res.end(); 
}).listen(8003);