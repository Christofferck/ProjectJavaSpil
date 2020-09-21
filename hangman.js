
var options = ["worda", "wordb", "wordc"];

var randomPick = options[Math.floor(Math.random()*options.length)];

var word = randomPick.split([]);
var wordU = [];

console.log(word)
var userArray = [];

var length = word.length;

window.onload = function() {
  for (var i = 0; i < length; i++) {
    wordU[i] = "_"
  };
  document.getElementById("display").innerHTML = wordU;
};

var guesses = 15;





var keypress;


// Adder eventlistener til keyboard
const doSomething = function(){
  document.addEventListener("keypress", charCheck);
};


function charCheck(e) {
  var allowedChar = ["a","b","c","d","e","f","g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","æ","ø","å"];
  keypress = e.textContent = e.key;

  // Hvis keypressed er en af de tillate tegn
  if (allowedChar.includes(e.textContent = e.key) === true) {
    wordHint(keypress)
  };
};


function wordHint(e) {
  userInput = e;
  console.log(userInput)
    guesses--;

    userArray.push(userInput);
    console.log(userArray)


    if (word.includes(userInput)) {
      console.log(word.includes(userInput))

    };


  document.getElementById("userInput").innerHTML = userArray;
  document.getElementById("guesses").innerHTML = guesses;
}







/*

function wordHint(e) {
  var userInput = keypress;
  console.log(userInput)
  if (e.textContent += ` ${e.key}`) {
    guesses--;

    userArray.push(userInput);
    console.log(userArray)

    if (guesses === 0) {
      alert("Game over")
    }

    if (userArray.length === word.length) {
      alert("you win")
    }
  }

  document.getElementById("userInput").innerHTML = userArray;
  document.getElementById("guesses").innerHTML = guesses;
}


*/




window.addEventListener('load', doSomething);
