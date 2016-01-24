var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Character = require('./models/character')
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

app.get('/list', function(req, res){
  res.send('hi')
})

app.post('/create', function(req, res){
  console.log(req.body);
  var calcAbilBonus = function(num){
    bonus = Math.floor((num-10)/2)
    return bonus
  };
  var calcHitPoints = function(){
    var reduced = 0;
    if(Array.isArray(req.body.hit_point_max)){
      for(var j=0; j<req.body.hit_point_max.length; j++){
        reduced += parseInt(req.body.hit_point_max[j])
      }
      req.body.hit_point_max = reduced
    }
    req.body.hit_point_max = parseInt(req.body.hit_point_max) + calcAbilBonus(parseInt(req.body[req.body.selectedCon]))
  }
  calcHitPoints();
  var new_char = {
    char_name: req.body.charName,
    player_name: req.body.playerName,
    player_email: req.body.playerEmail,
    char_race: req.body.char_race,
    char_class: req.body.char_class,
    char_background: req.body.char_background,
    skill_proficiencies: req.body.skill,
    str: req.body[req.body.selectedStr],
    str_bonus: calcAbilBonus(parseInt(req.body[req.body.selectedStr])),
    dex: req.body[req.body.selectedDex],
    dex_bonus: calcAbilBonus(parseInt(req.body[req.body.selectedDex])),
    con: req.body[req.body.selectedCon],
    con_bonus: calcAbilBonus(parseInt(req.body[req.body.selectedCon])),
    int: req.body[req.body.selectedInt],
    int_bonus: calcAbilBonus(parseInt(req.body[req.body.selectedInt])),
    wis: req.body[req.body.selectedWis],
    wis_bonus: calcAbilBonus(parseInt(req.body[req.body.selectedWis])),
    cha: req.body[req.body.selectedCha],
    cha_bonus: calcAbilBonus(parseInt(req.body[req.body.selectedCha])),
    armor_class: 10+calcAbilBonus(parseInt(req.body[req.body.selectedDex])),
    initiative: calcAbilBonus(parseInt(req.body[req.body.selectedDex])),
    speed: req.body.speed,
    hit_point_max: req.body.hit_point_max,
    features: req.body.features,
    profs_and_langs: req.body.prof,
    equipment: req.body.equip,
    cantrips: req.body.cantrips,
    first_level_spells: req.body.fLSpells,
    spellcasting_ability: 0,
    spell_save_dc: 0,
    spell_attack_bonus: 0
  }
  var charMaker = new Character(new_char);
  charMaker.save(function(err, result){
    res.redirect('/list')
  })

})


app.listen(process.env.PORT || 3000);