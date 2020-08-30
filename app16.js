var express=require('express');
var bodyParser=require('body-parser');
var app=express();

var urlencodedParser=bodyParser.urlencoded({extended:false});

app.set('view engine','ejs');

// app.use('/assets',function(req,res,next){
//     console.log(req.url);
//     next(); //after finish go on next set of middleware if multiple middlewares mapped to this url
// }) //whenever /assets starts at start of url, this is gonna fire 

app.use('/assets',express.static('assets')); //any requests made to /assets is mapped to this folder

app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    //console.log(req.query);
    res.render('contact',{qs:req.query});
});

app.post('/contact',urlencodedParser,function(req,res){
   console.log(req.body); 
   res.render('contact-success',{data:req.body});
});

app.get('/profile/:name',function(req,res){
    var data={age: 18, job:'freelance model',hobbies:['eating','fighting','fishing']};
    res.render('profile',{person:req.params.name,data: data});
});

app.listen(3000);

