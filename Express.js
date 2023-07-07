=== require express.js==================================================================================
  
const express=require("express");
const app=express();

=== Routs in express.js==================================================================================
  
app.get('/', function(req, res){
res.send("<h1>This is my first server</h1> <h2> welcome to BackUp codding</h2>")
});
//http://localhost:3000

app.get('/contact', function (req,res){
    res.send('<h2>Contact me at email@domain</h2>')
})
//http://localhost:3000/contact

app.get('/about', function(req,res){
    res.send('<h3>Hi there. My name is Aleksander and I am a programnpm instamer</h3>')
})
//http://localhost:3000/about

app.get('/hobbies', function(req, res){
    res.send('I like beer and buffalo wings')
})
//http://localhost:3000/hobbies


app.listen(3000, function(){
    console.log("Server started at port 3000");
});

=========================================================================================================
