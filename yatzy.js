
var dice = new Array(0,0,0,0,0);
var hold = new Array(0,0,0,0,0);
let turn = 0;

function rollDice() {
    if (turn<3){
        for (i = 0; i < 5; i++) {
            if (hold[i] == 0) {
                dice[i] = Math.floor(Math.random() * 5) + 1;
                document.getElementById("dice" + i) + (dice[i]);
            }
        }
        turn = ++turn;
        document.getElementById("dice1").innerHTML = dice[0];
        document.getElementById("dice2").innerHTML = dice[1];
        document.getElementById("dice3").innerHTML = dice[2];
        document.getElementById("dice4").innerHTML = dice[3];
        document.getElementById("dice5").innerHTML = dice[4];
    }     
    else {
        document.getElementById("rules").innerHTML = "Ikke flere kast";
        document.getElementById("dice1").innerHTML = "";
        document.getElementById("dice2").innerHTML = "";
        document.getElementById("dice3").innerHTML = "";
        document.getElementById("dice4").innerHTML = "";
        document.getElementById("dice5").innerHTML = "";
    }
    var dices = document.getElementsByClassName("dice");
    for(var z = 0; z < dices.length; z++){
        dices[z].addEventListener("click", function() {
           hold[this.dataset.index] = (hold[this.dataset.index] == 0) ? 1 : 0;             
        });
    }
}
function changeColorD1(){
    document.getElementById("dice1").style.backgroundColor = 'lightgreen';
}

function changeColorD2() {
    document.getElementById("dice2").style.backgroundColor = 'lightgreen';
}

function changeColorD3() {
    document.getElementById("dice3").style.backgroundColor = 'lightgreen';
}

function changeColorD4() {
    document.getElementById("dice4").style.backgroundColor = 'lightgreen';
}

function changeColorD5() {
    document.getElementById("dice5").style.backgroundColor = 'lightgreen';
}

function resetDices() {
    location.reload();
}
