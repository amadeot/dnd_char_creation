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
    {name:"Barbarian", path:"/partials/charClasses/barbarian", possible_skills:["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"], wep_one:["BattleAxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", "Warhammer", "Whip"], wep_two:["Two Handaxes", "Club", "Dagger", "Greatclub", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"]},
    {name:"Bard", path:"/partials/charClasses/bard", 
        wep_one: ["Rapier", "Longsword", "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"], 
        opt_one: ["Diplomat's Pack", "Entertainer's Pack"], 
        cantrips: ["Blade Ward", "Dancing Lights", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Prestidigitation", "True Strike", "Vicious Mockery"],
        spells: ["Animal Friendship", "Bane", "Charm Person", "Comprehend Languages", "Cure Wounds", "Detect Magic", "Disguise Self", "Dissonant Whispers", "Faerie Fire", "Feather Fall", "Healing Word", "Heroism", "Identify", "Illusory Script", "Longstrider", "Silent Image", "Sleep", "Speak with Animals", "Tasha’s Hideous Laughter", "Thunderwave", "Unseen Servant"]},
    {name:"Cleric", path:"/partials/charClasses/cleric", possible_skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"], wep_one: ["Mace", "Warhammer"], wep_two: ["Light Crossbow","Handaxe", "Club", "Dagger", "Greatclub", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Dart", "Shortbow", "Sling"], armor: ["Scale Mail", "Leather Armor", "Chain Mail"], opt_one:["Priest's Pack", "Explorer's Pack"], cantrips:["Guidance", "Light", "Mending", "Resistance", "Sacred Flame", "Spare the Dying", "Thaumaturgy"]},
    {name:"Druid", path:"/partials/charClasses/druid", cantrips: ["Druidcraft", "Guidance", "Mending", "Poison Spray", "Produce Flame", "Resistance", "Shillelagh", "Thorn Whip"], possible_skills: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"], opt_one: ["Wooden Shield", " Handaxe", "Club", "Dagger", "Greatclub", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"], opt_two:["Scimitar", " Handaxe", "Club", "Dagger", "Greatclub", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear"]},
    {name:"Fighter", path:"/partials/charClasses/fighter", possible_skills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "and Survival"], armor:["Chain Mail", "Leather Armor and a Longbow"], wep_one:["Shield", "BattleAxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", "Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"], wep_two:["Shield", "BattleAxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", "Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"], wep_three:["Light Crossbow", "Two Handaxes"], opt_one:["Dungeoneer's Pack", "Explorer's Pack"], fighting_style:["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two Weapon Fighting"]},
    {name:"Monk", path:"/partials/charClasses/monk", possible_skills: ["Acrobatics", "Athletics", "Insight", "Religion", "Stealth"], wep_one:["Shortsword", "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"], opt_one:["Dungeoneer's Pack", "Explorer's Pack"]},
    {name:"Paladin", path:"/partials/charClasses/paladin", possible_skills:["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"], wep_one:["Shield", "BattleAxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", "Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"], wep_two:["BattleAxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", "Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"], wep_three:["5 Javelins", "Club", "Dagger", "Greatclub", "Handaxe", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"], opt_one:["Priest's Pack", "Explorer's Pack"]},
    {name:"Ranger", path:"/partials/charClasses/ranger", possible_skills: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"], armor:["Scale Mail", "Leather Armor"], opt_one:["Dungeoneer's Pack", "Explorer's Pack"], wep_one: [ "Shortsword", "Club", "Dagger", "Greatclub", "Handaxe", "Light Hammer", "Javelin", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"], wep_two: [ "Shortsword", "Club", "Dagger", "Greatclub", "Handaxe", "Light Hammer", "Javelin", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"], favored_enemies:["Abberations", "Beasts", "Celestials", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead", "Choose Two Types of Humanoids"], favored_terrain: ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain", "Swamp", "Underdark"]},
    {name:"Rogue", path:"/partials/charClasses/rogue", wep_one:["Rapier", "Shortsword"], wep_two:["Shortbow", "Shortsword"], opt_one:["Burglar's Pack", "Dungeoneer's Pack", "Explorer's Pack"], possible_expertise:["Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion", "Thieve's Tools"], possible_skills:["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"]},
    {name:"Sorcerer", path:"/partials/charClasses/sorcerer", possible_skills:["Arcana", "Deception", "Insight", "Intimidation", "Intimidation", "Persuasion", "Religion"], wep_one:["Light Crossbow", "Club", "Dagger", "Greatclub", "Handaxe", "Light Hammer", "Javelin", "Mace", "Quarterstaff", "Sickle", "Spear", "Dart", "Shortbow", "Sling"], opt_one:["Dungeoneer's Pack", "Explorer's Pack"], opt_two:["Component Pouch", "Arcane Focus"], cantrips:["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"], spells:["Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Fog Cloud", "Jump", "Mage Armor", "Magic Missile", "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Thunderwave", "Witch Bolt"]},
    {name:"Warlock", path:"/partials/charClasses/warlock", wep_one:["Light Crossbow", "Club", "Dagger", "Greatclub", "Handaxe", "Light Hammer", "Javelin", "Mace", "Quarterstaff", "Sickle", "Spear", "Dart", "Shortbow", "Sling"], opt_one:["Component Pouch", "Arcane Focus"], opt_two:["Scholar's Pack", "Dungeoneer's Pack"], cantrips:["Blade Ward", "Chill Touch", "Eldritch Blast", "Friends", "Mage Hand", "Minor Illusion", "Poison Spray", "Prestidigitation", "True Strike"], spells:["Armor of Agathys", "Arms of Hadar", "Charm Person", "Comprehend Languages", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Illusory Script", "Protection from Evil and Good", "Unseen Servant", "Witch Bolt", "ARCHFEY SPELLS", "Faerie Fire", "Sleep", "FIEND SPELLS", "Burning Hands", "Command", "GREAT OLD ONE SPELLS", "Dissonant Whispers", "Tasha’s Hideous Laughter"], possible_skills:["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"]},
    {name:"Wizard", path:"/partials/charClasses/wizard", cantrips:["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"], possible_skills:["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"], wep_one:["Quarterstaff", "Dagger"], opt_one:["Component Pouch", "Arcane Focus"], opt_two:["Scholar's Pack", "Explorer's Pack"], spells:["Alarm", "BurningHands", "Charm Person Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Grease", "Identify", "Illusory Script", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Tasha’s Hideous Laughter", "Tenser’s Floating Disk", "Thunderwave", "Unseen Servant", "Witch Bolt"]}
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
  char.domains = [
  {name:"Knowledge", path:"/partials/domains/knowledge", possible_skills:["Aracana", "History", "Nature", "Religion"]},
  {name:"Light", path:"/partials/domains/light"},
  {name:"Nature", path:"/partials/domains/nature", cantrips:["Druidcraft", "Guidance", "Mending", "Poison Spray", "Produce Flame", "Resistance", "Shillelagh", "Thorn Whip"]},
  {name:"Tempest", path:"/partials/domains/tempest"},
  {name:"Trickery", path:"/partials/domains/trickery"},
  {name:"War", path:"/partials/domains/war"}
  ];
  char.origins = [
    {name:"Draconic Bloodline", path:"/partials/domains/draconic", },
    {name:"Wild Magic", path:"/partials/domains/wild"}
  ];
  char.patrons = [
    {name:"The Archfey", path:"/partials/domains/archfey"},
    {name:"The Fiend", path:"/partials/domains/fiend"},
    {name:"The Great Old One", path:"/partials/domains/greatOldOne"}
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