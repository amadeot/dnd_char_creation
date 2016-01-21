var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('charcreator')
});

app.get('/partials/races', function(req, res){
  res.render('partials/races')
})


app.listen(process.env.PORT || 3000);