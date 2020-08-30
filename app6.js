var fs=require('fs');

// var readMe=fs.readFileSync('readMe.txt','utf8'); //this is synchronous
// console.log(readMe);

// fs.writeFileSync('writeMe.txt',readMe);

fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('writeMe.txt',data,err=>{});
})



