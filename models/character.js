var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dnd');

var dndSchema = mongoose.Schema({
  char_name: String,
  player_name: String,
  player_email: String,
  char_race: String,
  char_class: String,
  char_background: String,
  skill_proficiencies: Array,
  str: Number,
  str_bonus: Number,
  dex: Number,
  dex_bonus: Number,
  con: Number,
  con_bonus: Number,
  int: Number,
  int_bonus: Number,
  wis: Number,
  wis_bonus: Number,
  cha: Number,
  cha_bonus: Number,
  armor_class: Number,
  initiative: Number,
  speed: Number,
  hit_point_max: Number,
  features: Array,
  profs_and_langs: {},
  equipment: {},
  cantrips: Array,
  first_level_spells: Array,
  spellcasting_ability: Number,
  spell_save_dc: Number,
  spell_attack_bonus: Number
});

module.exports = mongoose.model('Dnd', dndSchema);
