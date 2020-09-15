/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

console.log('::::: PIG GAME :::::');

var playerTotalScore,roundScore, activePlayer, isGamePlaying;

initGame();

function initGame() {
    playerTotalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = true;
    // Doing inline css manipulation. Hiding Dice.
    document.querySelector(".dice").style.display = "none";
    
    // Setting the total score for player is zero
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    
    // Setting the current score for the player is 0.
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    
    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";
    
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    
    document.querySelector(".player-0-panel").classList.add('active');
    
}


// dice = Math.floor(Math.random()*6);
// console.log(dice);

// first dom manipulation
// document.querySelector("#current-"+ activePlayer).textContent = "dice";

/*
// Doing html manupulation using innerHtml tag.
document.querySelector("#current-1").innerHTML = '<h1>' + dice + '</h1>'
*/

// New Game:

document.querySelector(".btn-new").addEventListener("click",initGame);


// --------------------------------------------------------

/******************************* 
* Events and Event Handler
*/

// Anonymous function is decalred
document.querySelector(".btn-roll").addEventListener("click", function(){
    
    if(isGamePlaying) {
        // Create a random number
        var diceNumber = Math.floor(Math.random()*6) + 1;
        
        // Show the resulted dice
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-"+diceNumber+".png";
        
        if(diceNumber !== 1){
            roundScore += diceNumber;
            document.querySelector("#current-"+ activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

// HOLD FUNCTIONALITY
document.querySelector(".btn-hold").addEventListener("click", function(){
    
    if(isGamePlaying) {
  
    // Add the current score to global score.
    playerTotalScore[activePlayer] += roundScore;
    
    document.querySelector("#score-" + activePlayer).textContent = playerTotalScore[activePlayer];
    
    // Update the UI i.e player change
    
    if(playerTotalScore[activePlayer] >= 20){
        document.querySelector("#name-" + activePlayer).textContent = "Winner !!!";
        document.querySelector(".dice").style.display = "none";
        
        document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove('active');

        isGamePlaying = false;
        
    }else{
        nextPlayer();
    }
}
});

function nextPlayer(){
    
    // changing the active player using ternary operator
    activePlayer ===0 ? activePlayer = 1: activePlayer = 0; 
    roundScore = 0;
    
    // Resetting the current value in UI.
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    
    /*
    // We can achieve below by toggle function
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
    */
    
    // Toggle will work 
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    // While changing the player, we are removing the dice from UI
    document.querySelector(".dice").style.display = "none";
    
}

