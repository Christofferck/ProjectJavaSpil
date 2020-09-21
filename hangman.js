var wordHintP = document.getElementById("wordHint")

var options = []



function randomWord() {
  options = ["Pik", "plankton", "sandyhook", "pleb", "columbine", "noggenfogger"];
  var randomPick = options [Math.floor(Math.random()*options.length)];

  var word = randomPick.split([]);
  console.log(word);
  wordHint(word);
}


function wordHint(word) {
  for (var i = 0; i < options.length; i++) {
    wordHint.innerHTML +=
  }
}






randomWord();




/*

let text = document.getElementById("text");
let btn = document.getElementById("btn");
console
let array = []

const doSomething = function(){
  btn.addEventListener("click", stringToArray);

};



function stringToArray() {
  for (var i = 0; i < text.value.length; i++) {
    let x = text.charAt(0)
    array.push(x)
  }
  console.log(array)
}















window.addEventListener('load', doSomething);

*/
