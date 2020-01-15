var express = require('express');
var app = express();
var request=require("request");
var url="http://localhost:3001/notes";
//app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    request(url,(error,response,body)=>{
        if(!error&&response.statusCode==200){
             var list=JSON.parse(body);
            // console.log(list);
            res.render('index.ejs',{listToUpload:list});
        }
    });
    

});



app.listen(3000, function() {
    console.log('server is running');
});
