console.log('its ok');
allRolls =[];
rollDie = function(){
  var die;
  var dice = [];
  var diceTotal = 0;
  for(i=0;i<4;i++){
    die = Math.floor((Math.random()*6)+1)
    dice.push(die)
  }
  dice.sort().shift()
  for(var j=0; j<dice.length; j++){
    diceTotal += dice[j]
  }
  allRolls.push(diceTotal)
}

$(document).ready(function(){
  $("#roll-dice").click(function(event){
    event.preventDefault();
    $(".dice-container").empty()
    allRolls = []
    for(x=1;x<7;x++){
      rollDie()

      $(".dice-container").append("<div><label for abil-roll_"+x+">Ability Roll "+x+" </label><input id='abil-roll-"+x+"' name='abil_roll_"+x+"' type='number' value='"+allRolls[x-1]+"' readonly></div>") 
    };
    $(".dice-container").append()
    console.log(allRolls)
  })
})
