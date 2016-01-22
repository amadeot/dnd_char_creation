angular.module('DnDApp').controller('CharsController', CharController);

function CharController () {
  var char = this;
  char.races = [
    {sName:"hill-dwarf", fName:"Hill Dwarf"},
    {sName:"mtn-dwarf", fName:"Mountain Dwarf"},
    {sName:"high-elf", fName:"High Elf"},
    {sName:"wood-elf", fName:"Wood Elf"},
    {sName:"dark-elf", fName:"Dark Elf (Drow)"},
    {sName:"lf-halfling", fName:"Lightfoot Halfling"},
    {sName:"stout-halfling", fName:"Stout Halfling"},
    {sName:"human", fName:"Human"},
    {sName:"dragonborn", fName:"Dragonborn"},
    {sName:"forest-gnome", fName:"Forest Gnome"},
    {sName:"rock-gnome", fName:"Rock Gnome"},
    {sName:"half-elf", fName:"Half-Elf"},
    {sName:"half-orc", fName:"Half-Orc"},
    {sName:"tiefling", fName:"Tiefling"}
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
    {name:"Barbarian", path:"/partials/charClasses/barbarian", possible_skills:["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]},
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
  char.charBackgrounds = [
    "Acolyte",
    "Charlatan",
    "Criminal",
    "Entertainer",
    "Folk Hero",
    "Guild Artisan",
    "Hermit",
    "Noble",
    "Outlander",
    "Sage",
    "Sailor",
    "Soldier",
    "Urchin"]
}