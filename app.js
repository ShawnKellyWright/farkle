// Game of Farkle!!! ( Shawn will Always WIN!!!! )

// array storing players names 
let players = [];
// array storing dice roll()
let dice = [];
// array storing ones if in dice roll()
let ones = [];
let twos = [];
let threes = [];
let fours = [];
let fives = [];
let sixes = [];
let diceArrays = [];
// Temp score. If player does not farkle it will be added to their total at end of turn
let tempScore = 0;
// how many players
let numPlayers = prompt("How many players?");
// Ask players names and store in array players[] until loop completes based on amount of players.
for (let i = 0; i < numPlayers; i++) {
  let playerName = prompt("What is player name?");
    players.push(playerName);
}
// Following is Working code
function rollDie() {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let die3 = Math.floor(Math.random() * 6) + 1;
    let die4 = Math.floor(Math.random() * 6) + 1;
    let die5 = Math.floor(Math.random() * 6) + 1;
    let die6 = Math.floor(Math.random() * 6) + 1;
    alert("Die 1:   " + die1 + " " + "\n" + "Die 2:   " + die2 + " " + "\n" +"Die 3:   " + die3 + " " + "\n" + "Die 4:   " + die4 + " " + "\n" +  "Die 5:   " + die5 + " " +     "\n" + "Die 6:   " + die6);
    
    dice.push(die1, die2, die3, die4, die5, die6);
   
    
}
// player turn roll dice. Store the 6 random numbers into corresponding arrays = to number.  
rollDie();
for (let j = 0; j < dice.length; j++) {
  if (dice[j] === 1) {
    ones.push(dice[j]);
  } else if (dice[j] === 2) {
    twos.push(dice[j]);
  } else if (dice[j] === 3) {
    threes.push(dice[j]);
  } else if (dice[j] === 4) {
    fours.push(dice[j]);
  } else if (dice[j] === 5) {
    fives.push(dice[j]);
  } else if (dice[j] === 6) {
    sixes.push(dice[j]);
  }
}
// Getting sum of numbers
let sum1 = ones.reduce(function(a, b) {
  return a + b;
}, 0);
if (sum1 === 1) {
  tempScore = 100
}else if (sum1 === 2) {
    tempScore = 200;
}else if (sum1 === 3) {
    tempScore = 300;
}else if (sum1 === 4) {
    tempScore = 1000;
}else if (sum1 === 5) {
  
}
let sum2 = twos.reduce(function(a, b) {
  return a + b;
}, 0);
let sum3 = threes.reduce(function(a, b) {
  return a + b;
}, 0);
let sum4 = fours.reduce(function(a, b) {
  return a + b;
}, 0);
let sum5 = fives.reduce(function(a, b) {
  return a + b;
}, 0);
let sum6 = sixes.reduce(function(a, b) {
  return a + b;
}, 0);
// after sum of arrays ones-sixes, push sum totals and store in an array and the sort    
diceArrays.push(sum1, sum2, sum3, sum4, sum5, sum6); 

if (diceArrays[0] === 1) {
  tempScore = 100;
}else if (diceArrays[0] === 2) {
  tempScore = 200;
}else if (diceArrays[0] === 3) {
  tempScore = 300;
}else if (diceArrays[0] === 4) {
  tempScore = 1000;
}else if (diceArrays[0] === 5) {
  tempScore = 2000; 
}else if (diceArrays[0] === 6) {
  tempScore = 3000;
  let rollAgain = prompt("Would you like to keep score and roll again?");
  let rollAgainLC = rollAgain.toLowerCase();
  if (rollAgainLC === 'y' || rollAgainLC === 'ys' || rollAgainLC === 'yes' || rollAgainLC === 'yess' || rollAgainLC === 'yees' || rollAgainLC === 'yyes' || rollAgainLC === 'sure' || rollAgain === 'please') {
    let player score = player score + tempScore;
    rollDie();
  }
}else if (diceArrays[1] === 6) {
  tempScore = tempScore + 200;
}else if (diceArrays[1] === 8) {
  tempScore = tempScore + 1000;
}else if (diceArrays[1] === 10) {
  tempScore = tempScore + 2000; 
}else if (diceArrays[1] === 12) {
  tempScore = tempScore + 3000;
  let rollAgain = prompt("Would you like to keep score and roll again?");
  let rollAgainLC = rollAgain.toLowerCase();
  if (rollAgainLC === 'y' || rollAgainLC === 'ys' || rollAgainLC === 'yes' || rollAgainLC === 'yess' || rollAgainLC === 'yees' || rollAgainLC === 'yyes' || rollAgainLC === 'sure' || rollAgain === 'please') {
    let player score = player score + tempScore;
    rollDie();
  }
}else if (diceArrays[2] === 9) {
  tempScore = tempScore + 300;
}else if (diceArrays[2] === 12) {
  tempScore = tempScore + 1000;
}else if (diceArrays[2] === 15) {
  tempScore = tempScore + 2000; 
}else if (diceArrays[2] === 18) {
  tempScore = tempScore + 3000;
  let rollAgain = prompt("Would you like to keep score and roll again?");
  let rollAgainLC = rollAgain.toLowerCase();
  if (rollAgainLC === 'y' || rollAgainLC === 'ys' || rollAgainLC === 'yes' || rollAgainLC === 'yess' || rollAgainLC === 'yees' || rollAgainLC === 'yyes' ||           rollAgainLC === 'sure' || rollAgain === 'please') {
    rollDie();
  }else{
    let player score = player score + tempScore;
  }
}else if (diceArrays[3] === 12) {
  tempScore = tempScore + 400;
}else if (diceArrays[3] === 16) {
  tempScore = tempScore + 1000;
}else if (diceArrays[3] === 20) {
  tempScore = tempScore + 2000; 
}else if (diceArrays[3] === 24) {
  tempScore = tempScore + 3000;
  let rollAgain = prompt("Would you like to keep score and roll again?");
  let rollAgainLC = rollAgain.toLowerCase();
  if (rollAgainLC === 'y' || rollAgainLC === 'ys' || rollAgainLC === 'yes' || rollAgainLC === 'yess' || rollAgainLC === 'yees' || rollAgainLC === 'yyes' ||           rollAgainLC === 'sure' || rollAgain === 'please') {
    rollDie();
  }else let player score = player score + tempScore;
}
