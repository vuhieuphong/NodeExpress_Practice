var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readMe2.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe3.txt');

//has to pipe from a readable stream
myReadStream.pipe(myWriteStream);