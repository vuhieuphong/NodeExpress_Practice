var fs=require('fs');

// fs.unlinkSync('writeFile.txt'); //sync

// fs.unlink('writeMe.txt',function(err){
//     if(err) throw err;
//     console.log('File deleted');
// }); //async

// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// fs.mkdir('stuff',function(){
//     fs.readFile('readMe.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writeMe.txt',data,err=>{});
//     })
// })

fs.unlink('./stuff/writeMe.txt',function(err){
    if(err) throw err;
    console.log('File deleted');
}); 

fs.rmdir('stuff',function(err){
    if(err) throw err;
    console.log('Directory deleted');
});

