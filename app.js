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

app.get('/partials/charClasses/:name', function(req, res){
  res.render('partials/charClasses/'+req.params.name)
})

app.get('/partials/races/:name', function(req, res){
  res.render('partials/races/'+req.params.name)
})
app.get('/partials/backgrounds/:name', function(req, res){
  res.render('partials/backgrounds/'+req.params.name)
})

app.post('/create', function(req, res){
  console.log(req.body);
  
})


app.listen(process.env.PORT || 3000);