var http=require('http');

var server=http.createServer(function(req,res){
    console.log('Request was made: '+req.url)
    res.writeHead(200,{'Content-Type':'text/plain'});   //writeHead(status,contenttype)
    res.end('Hey Phong!'); //send back plain text
});

server.listen(3000,'127.0.0.1'); //listen(portnumber,IPaddress)
console.log('yo, now listening to port 3000');