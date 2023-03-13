var express = require("express");
var app =express();
var bodyParser = require('body-parser');

var urlencoderParser = bodyParser.urlencoded({extended:false});
app.use(express.static('public'));

app.get('/IndexStep.html',function(req,res){
    res.sendFile(_dirname + "IndexStep.html");
});

app.post('/post',urlencoderParser,function(req,res){
    response={
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        address:req.body.address
    }
    console.log(response);
    res.send(JSON.stringify(response));
});

var server = app.listen(8000,function(){
    console.log("server is running");
})