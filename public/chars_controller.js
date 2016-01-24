angular.module('DnDApp').controller('CharsController', CharController);

function CharController () {
  var char = this;
  char.races = [
    {sName:"hill_dwarf", fName:"Hill Dwarf", path:"/partials/races/hill_dwarf", dwarvenToolProf:["Smith's Tools", "Brewer's Supplies", "Mason's Tools"]},
    {sName:"mtn_dwarf", fName:"Mountain Dwarf", path:"/partials/races/mtn_dwarf", dwarvenToolProf:["Smith's Tools", "Brewer's Supplies", "Mason's Tools"]},
    {sName:"high_elf", fName:"High Elf", path:"/partials/races/high_elf", possible_cantrips:["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"]},
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
    {type:"Black", damage_type: "acid", br_wep_type: "30 foot line", br_wep_save: "dexterity"},
    {type:"Blue", damage_type: "lighting", br_wep_type: "30 foot line", br_wep_save: "dexterity"},
    {type:"Brass", damage_type: "fire", br_wep_type: "30 foot line", br_wep_save: "dexterity"},
    {type:"Bronze", damage_type: "lighting", br_wep_type: "30 foot line", br_wep_save: "dexterity"},
    {type:"Copper", damage_type: "acid", br_wep_type: "30 foot line", br_wep_save: "dexterity"},
    {type:"Gold", damage_type: "fire", br_wep_type: "15 foot cone", br_wep_save: "dexterity"},
    {type:"Green", damage_type: "poison", br_wep_type: "15 foot cone", br_wep_save: "constitution"},
    {type:"Red", damage_type: "fire", br_wep_type: "15 foot cone", br_wep_save: "dexterity"},
    {type:"Silver", damage_type: "cold", br_wep_type: "15 foot cone", br_wep_save: "constitution"},
    {type:"White", damage_type: "cold", br_wep_type: "15 foot cone", br_wep_save: "constitution"}
  ];
  char.charClasses = [
    {name:"Barbarian", path:"/partials/charClasses/barbarian", possible_skills:["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"], wep_one:["BattleAxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", "Warhammer", "Whip"], wep_two:["Two Handaxes", "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"]},
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
    {name:"Wizard", path:"/partials/charClasses/wizard", possible_cantrips:["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"]}
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
  char.all_skills = [
    "Athletics",
    "Acrobatics",
    "Sleight of Hand",
    "Stealth",
    "Arcana",
    "History",
    "Investigation",
    "Nature",
    "Religion",
    "Animal Handling",
    "Insight",
    "Medicine",
    "Perception",
    "Survival",
    "Deception",
    "Intimidation",
    "Performance",
    "Persuasion"
  ]
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