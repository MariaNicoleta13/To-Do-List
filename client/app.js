var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Item.get(function(err, items) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        console.log(items);
        res.render('index.ejs', { listToUpload: items });
    });
});

let apiRoutes = require('./api/routes');
let bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(3000, function() {
    console.log('server is running');
});
