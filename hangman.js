
//var options = ["test"];

var inputWord = document.getElementById("inputWord")
var inputBtn = document.getElementById("inputBtn")
//var randomPick = options[Math.floor(Math.random()*options.length)];



var word = []; //= randomPick.split([]);


var wordU = [];

console.log(word)
var userArray = [];

var length = word.length;

var guesses = 7;

var keypress;

var indexes = [];

var allowedChar = [];



// Adder eventlistener til keyboard
const doSomething = function(){
  document.addEventListener("keypress", charCheck);
  inputBtn.addEventListener("click", pickWord)
  console.log(inputBtn);



};


function pickWord() {
  word = inputWord.value
  for (var i = 0; i < word.length; i++) {
    wordU[i] = "_"
  allowedChar = ["a","b","c","d","e","f","g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","æ","ø","å"];

  };
  document.getElementById("display").innerHTML = wordU;
};


function populate() {
  document.getElementById("display").innerHTML = wordU;
}


function charCheck(e) {

  keypress = e.textContent = e.key;

  // Hvis keypressed er en af de tillate tegn
  if (allowedChar.includes(e.textContent = e.key) === true) {
    wordHint(keypress)

  };

  if (event.keyCode === 13) {
    pickWord()
  };
};

  function wordHint(e) {
      userInput = e;
      console.log(userInput)


      userArray.push(userInput);


      let removeKey = allowedChar.indexOf(userInput)
      allowedChar.splice(removeKey, 1)

      //Hvis key
        if (word.includes(userInput)) {
          //  var index = word.indexOf(userInput);

          for (var i = 0; i < word.length; i++) {
            if(word[i] === userInput) {
              wordU[i] = userInput
            };
          };

          document.getElementById("display").innerHTML = wordU.join(" ");



        } else {
            guesses--;


    };

    if (word === wordU.join("")) {
      alert("you win");
    } else if (guesses === 0) {
      alert("you lose");
    }

  document.getElementById("userInput").innerHTML = userArray;
  document.getElementById("guesses").innerHTML = guesses;
  console.log(word)
  console.log(wordU.join(""))

};



function winLose() {

}














window.addEventListener('load', doSomething);
