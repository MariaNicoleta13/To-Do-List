var express=require("express");
var app=express();

//app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.set("view engine","ejs");

app.get("/",function(require,response){
    response.render("index.ejs");
});

app.listen(3000,function(){
   console.log("server is running");
});