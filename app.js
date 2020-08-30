setTimeout(function()
    {console.log('3 seconds have passed')}
,3000)

var time = 0;

var timer=setInterval(function()
    {
        time+=2;
        console.log(time+' seconds have passed');
        if(time>5){
            clearInterval(timer);
        }
    }
,2000);

console.log(__dirname); //tells the directory
console.log(__filename); //tells the directory and file name
