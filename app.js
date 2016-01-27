var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Character = require('./models/character')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index')
});

app.get('/create', function(req, res){
  res.render('charcreator')
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

app.get('/partials/domains/:name', function(req, res){
  res.render('partials/domains/'+req.params.name)
})

app.get('/show/:_id', function(req, res){
  Character.findOne({ '_id': req.params._id }, {}, function (err, character) {
  if (err) return handleError(err);
  res.render('template', {character})
  })
})

app.post('/create', function(req, res){
  console.log(req.body);
  var calcAbilBonus = function(num){
    bonus = Math.floor((num-10)/2)
    return bonus
  };
  var calcRacAbilMods = function(selector){
    switch(req.body[selector].attr){
      case "str":
        req.body[req.body.selectedStr] = parseInt(req.body[req.body.selectedStr]) + parseInt(req.body[selector].bonus);
        if(selector==="abilBon1"){calcRacAbilMods("abilBon2")};
        break;
      case "dex":
        req.body[req.body.selectedDex] = parseInt(req.body[req.body.selectedDex]) + parseInt(req.body[selector].bonus);     
        if(selector==="abilBon1"){calcRacAbilMods("abilBon2")};
        break;
      case "con":
        req.body[req.body.selectedCon] = parseInt(req.body[req.body.selectedCon]) + parseInt(req.body[selector].bonus);
        if(selector==="abilBon1"){calcRacAbilMods("abilBon2")};
        break;
      case "int":
        req.body[req.body.selectedInt] = parseInt(req.body[req.body.selectedInt]) + parseInt(req.body[selector].bonus);
        if(selector==="abilBon1"){calcRacAbilMods("abilBon2")};
        break;
      case "wis":
        req.body[req.body.selectedWis] = parseInt(req.body[req.body.selectedWis]) + parseInt(req.body[selector].bonus);
        if(selector==="abilBon1"){calcRacAbilMods("abilBon2")};
        break;
      case "cha":
        req.body[req.body.selectedCha] = parseInt(req.body[req.body.selectedCha]) + parseInt(req.body[selector].bonus);
        if(selector==="abilBon1"){calcRacAbilMods("abilBon2")};
        break;
      case "all":
        req.body[req.body.selectedStr] = parseInt(req.body[req.body.selectedStr]) + 1;
        req.body[req.body.selectedDex] = parseInt(req.body[req.body.selectedDex]) + 1;
        req.body[req.body.selectedCon] = parseInt(req.body[req.body.selectedCon]) + 1;
        req.body[req.body.selectedInt] = parseInt(req.body[req.body.selectedInt]) + 1;
        req.body[req.body.selectedWis] = parseInt(req.body[req.body.selectedWis]) + 1;
        req.body[req.body.selectedCha] = parseInt(req.body[req.body.selectedCha]) + 1;
        break;
      case "choose":
        calcRacAbilMods("abilBon3");
        calcRacAbilMods("abilBon4");
        break;
    }
  };
  calcRacAbilMods("abilBon1");
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
  var calcSpellStats = function(){
    switch(req.body.spellcasting_ability){
      case "int":
        req.body.spell_save_dc = parseInt(req.body.spell_save_dc) + calcAbilBonus(parseInt(req.body[req.body.selectedInt]));
        req.body.spell_attack_bonus = parseInt(req.body.spell_attack_bonus) + calcAbilBonus(parseInt(req.body[req.body.selectedInt]));
      case "wis":
        req.body.spell_save_dc = parseInt(req.body.spell_save_dc) + calcAbilBonus(parseInt(req.body[req.body.selectedWis]));
        req.body.spell_attack_bonus = parseInt(req.body.spell_attack_bonus) + calcAbilBonus(parseInt(req.body[req.body.selectedWis]));
      case "cha":
        req.body.spell_save_dc = parseInt(req.body.spell_save_dc) + calcAbilBonus(parseInt(req.body[req.body.selectedCha]));
        req.body.spell_attack_bonus = parseInt(req.body.spell_attack_bonus) + calcAbilBonus(parseInt(req.body[req.body.selectedCha]));
    }
  }
  calcSpellStats()
  var combineRace = function(){
    if(Array.isArray(req.body.char_race)){
      var result = req.body.char_race.join(", ")
      req.body.char_race = result
    }
  }
  combineRace()
  var new_char = {
    char_name: req.body.charName,
    player_name: req.body.playerName,
    player_email: req.body.playerEmail,
    alignment: req.body.alignment,
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
    spellcasting_ability: req.body.spellcasting_ability,
    spell_save_dc: req.body.spell_save_dc,
    spell_attack_bonus: req.body.spell_attack_bonus
  }
  var charMaker = new Character(new_char);
  charMaker.save(function(err, result){
    res.redirect('/show/'+result._id)
  })

})


app.listen(process.env.PORT || 3000);