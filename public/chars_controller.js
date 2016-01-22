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
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
  ];
  char.attrNames = [
    "str",
    "dex",
    "con",
    "int",
    "wis",
    "cha"
  ]
}