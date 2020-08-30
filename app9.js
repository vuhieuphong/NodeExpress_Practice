var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readMe2.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe2.txt');

myReadStream.on('data',function(chunk){ //event is 'data'. fireback function everytime receive chunk of data
    console.log('New chunk received: ');
    //console.log(chunk);
    myWriteStream.write(chunk);
})


