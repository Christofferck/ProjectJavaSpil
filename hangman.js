
var options = ["test"];

var randomPick = options[Math.floor(Math.random()*options.length)];

var word = randomPick.split([]);
var wordU = [];

console.log(word)
var userArray = [];

var length = word.length;


var guesses = 15;

var keypress;

var indexes = []

// Adder eventlistener til keyboard
const doSomething = function(){
  document.addEventListener("keypress", charCheck);

  for (var i = 0; i < length; i++) {
    wordU[i] = "_"
  };
  document.getElementById("display").innerHTML = wordU;
};


function populate() {
  document.getElementById("display").innerHTML = wordU;
}


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


      userArray.push(userInput);



        if (word.includes(userInput)) {


          indexes.push(word.indexOf(userInput))

          for (var i = 0; i < word.length; i++) {

            var index = word.indexOf(userInput);

            wordU[index] = userInput


          };




          document.getElementById("display").innerHTML = wordU;

          console.log(indexes)
          console.log(index)



        } else {
            guesses--;
        };





  document.getElementById("userInput").innerHTML = userArray;
  document.getElementById("guesses").innerHTML = guesses;
};






window.addEventListener('load', doSomething);
