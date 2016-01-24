angular.module('DnDApp').controller('CharsController', CharController);

function CharController () {
  var char = this;
  char.races = [
    {sName:"hill_dwarf", fName:"Hill Dwarf", path:"/partials/races/hill_dwarf", dwarvenToolProf:["Smith's Tools", "Brewer's Supplies", "Mason's Tools"]},
    {sName:"mtn_dwarf", fName:"Mountain Dwarf", path:"/partials/races/mtn_dwarf"},
    {sName:"high_elf", fName:"High Elf", path:"/partials/races/high_elf"},
    {sName:"wood_elf", fName:"Wood Elf", path:"/partials/races/wood_elf"},
    {sName:"dark_elf", fName:"Dark Elf (Drow)", path:"/partials/races/dark_elf"},
    {sName:"lf_halfling", fName:"Lightfoot Halfling", path:"/partials/races/lf_halfling"},
    {sName:"stout_halfling", fName:"Stout Halfling", path:"/partials/races/stout_halfling"},
    {sName:"human", fName:"Human", path:"/partials/races/human"},
    {sName:"dragonborn", fName:"Dragonborn", path:"/partials/races/dragonborn"},
    {sName:"forest_gnome", fName:"Forest Gnome", path:"/partials/races/forest_gnome"},
    {sName:"rock_gnome", fName:"Rock Gnome", path:"/partials/races/rock_gnome"},
    {sName:"half_elf", fName:"Half-Elf", path:"/partials/races/half_elf"},
    {sName:"half_orc", fName:"Half-Orc", path:"/partials/races/half_orc"},
    {sName:"tiefling", fName:"Tiefling", path:"/partials/races/tiefling"}
  ] 
  char.dragonborn_types = [
    "Black",
    "Blue",
    "Brass",
    "Bronze", 
    "Copper",
    "Gold", 
    "Green", 
    "Red", 
    "Silver", 
    "White" 
  ];
  char.charClasses = [
    {name:"Barbarian", path:"/partials/charClasses/barbarian", possible_skills:["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"], wep1:["BattleAxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", "Warhammer", "Whip"], wep2:["Two Handaxes", "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"]},
    {name:"Bard", path:"/partials/charClasses/bard"},
    {name:"Cleric", path:"/partials/charClasses/cleric"},
    {name:"Druid", path:"/partials/charClasses/druid"},
    {name:"Fighter", path:"/partials/charClasses/fighter"},
    {name:"Monk", path:"/partials/charClasses/monk"},
    {name:"Paladin", path:"/partials/charClasses/paladin"},
    {name:"Ranger", path:"/partials/charClasses/ranger"},
    {name:"Rogue", path:"/partials/charClasses/rogue"},
    {name:"Sorcerer", path:"/partials/charClasses/sorcerer"},
    {name:"Warlock", path:"/partials/charClasses/warlock"},
    {name:"Wizard", path:"/partials/charClasses/wizard"}
  ];
  char.showSelected = function(){
    console.log('select changed');
    console.log(char.selectedCharClass)
  }
  char.selectedCharClass = {
    name: "", path: ""
  };
  char.attrNames = [
    "str",
    "dex",
    "con",
    "int",
    "wis",
    "cha"
  ];
  char.languages = [
    "Common", 
    "Dwarvish", 
    "Elvish",
    "Giant",
    "Gnomish",
    "Goblin",
    "Halfling",
    "Orc",
    "Abyssal",
    "Celestial",
    "Draconic",
    "Infernal",
    "Sylvan",
  ];
  char.attrRolls = [
    {tag:"abil_roll_1", fText:"Roll 1"},
    {tag:"abil_roll_2", fText:"Roll 2"},
    {tag:"abil_roll_3", fText:"Roll 3"},
    {tag:"abil_roll_4", fText:"Roll 4"},
    {tag:"abil_roll_5", fText:"Roll 5"},
    {tag:"abil_roll_6", fText:"Roll 6"}   
    ];
  char.charBackgrounds = [
    {sName:"acolyte", fName:"Acolyte", path:"/partials/backgrounds/acolyte"},
    {sName:"charlatan", fName:"Charlatan", path:"/partials/backgrounds/charlatan"},
    {sName:"criminal", fName:"Criminal", path:"/partials/backgrounds/criminal"},
    {sName:"entertainer", fName:"Entertainer", path:"/partials/backgrounds/entertainer"},
    {sName:"folk_hero", fName:"Folk Hero", path:"/partials/backgrounds/folk_hero"},
    {sName:"guild_artisan", fName:"Guild Artisan", path:"/partials/backgrounds/guild_artisan"},
    {sName:"hermit", fName:"Hermit", path:"/partials/backgrounds/hermit"},
    {sName:"noble", fName:"Noble", path:"/partials/backgrounds/noble"},
    {sName:"outlander", fName:"Outlander", path:"/partials/backgrounds/outlander"},
    {sName:"sage", fName:"Sage", path:"/partials/backgrounds/sage"},
    {sName:"sailor", fName:"Sailor", path:"/partials/backgrounds/sailor"},
    {sName:"soldier", fName:"Soldier", path:"/partials/backgrounds/soldier"},
    {sName:"urchin", fName:"Urchin", path:"/partials/backgrounds/urchin"}];

}