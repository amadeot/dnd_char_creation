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
    allRolls = []
    for(x=0;x<6;x++){
      rollDie()
    }
    console.log(allRolls)
    $(".first-die").css(
      "value", allRolls[0])
  })
})
