var options = ["word1", "word2", "word3"];

var randomPick = options[Math.floor(Math.random()*options.length)];

var word = randomPick.split([]);

var userArray = [];

var length = word.length;

window.onload = function() {
  for (var i = 0; i < length; i++) {
    word[i] = "_"
  };
  document.getElementById("display").innerHTML = word;
};

var guesses = 15;






var allowedChar = ["a","b","c","d","e","f","g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","æ","ø","å"]
var keypress;


const doSomething = function(){
  document.addEventListener("keypress", charCheck);

};

function charCheck(e) {

  keypress = e.textContent = e.key;

  console.log(keypress)

  if (allowedChar.includes(e.textContent = e.key) === true) {
    wordHint(keypress)
  };
};



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







window.addEventListener('load', doSomething);
