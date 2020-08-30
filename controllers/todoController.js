var bodyParser=require('body-parser');
var mongoose=require('mongoose');

//Connect to the database
mongoose.connect('mongodb+srv://test:test@todo.s1rdp.mongodb.net/todo?retryWrites=true&w=majority',
    {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true}).catch(error => handleError(error));

//Create a schema - like a blueprint for our data
var todoSchema=new mongoose.Schema({
    item:String
});

//model of todo
var Todo=mongoose.model('Todo',todoSchema);

// var itemOne=Todo({item:'buy flowers'}).save(function(err){
//     if(err) throw err;
//     console.log('item save');
// })

// var data=[{item: 'get milk'},{item:'walk dog'},{item:'kick some coding ass'}]

var urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports=function(app){
    app.get('/todo',function(req,res){
        //get data from mongoDB and pass to view
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos:data});
        });  //find all item
        
        //Todo.find({item: buy flowers},...); //find specific item
    });

    app.post('/todo',urlencodedParser,function(req,res){
        //get data from the view and add it to mongoDB
        var newTodo=Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json({todos:data}); 
        });
    });

    app.delete('/todo/:item',function(req,res){
        //delete the requested item from mongoDB
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json({todos:data});
        }); 
    });
};