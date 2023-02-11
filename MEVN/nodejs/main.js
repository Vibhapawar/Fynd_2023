var http=require('http'); //importing the inbuilt http module
var dt=require('./ownModule'); //calling one module from another/userdefined module
//dt: today's date
http.createServer(function(req,res){ //callback function
    //res:respomse to a require(req)
    //response has 3 features: Head/Body and a Tail
    //Head:code indicating success or failure or any otherstatus
    //200: success code, format:text/html, json, xml...
    res.writeHead(200,{'Content-Type':'text/html'});
    //update the body of the response: data coming from a different user created module
    res.write("The date and time are currently:" +dt.getCurrentDate());
    //datetime is being fetched from the outside module
    //using the content type mentioned above as text/htmluser defined module
    res.end(); //ending the writing functionality for a request response function
}).listen(8080);//mentioning which port our application will run on the server