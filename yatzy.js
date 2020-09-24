var dice = new Array(0, 0, 0, 0, 0);
var hold = new Array(0, 0, 0, 0, 0);
let turn = 0;

function rollDice() {
  if (turn < 3) {
    for (i = 0; i < 5; i++) {
      if (hold[i] == 0) {
        dice[i] = Math.floor(Math.random() * 5) + 1;
        document.getElementById("dice" + i) + dice[i];
      }
    }
    turn = ++turn;
    document.getElementById("dice1").innerHTML = dice[0];
    document.getElementById("dice2").innerHTML = dice[1];
    document.getElementById("dice3").innerHTML = dice[2];
    document.getElementById("dice4").innerHTML = dice[3];
    document.getElementById("dice5").innerHTML = dice[4];
  } else {
    document.getElementById("rules").innerHTML =
      "Ikke flere kast"; /*
        document.getElementById("dice1").innerHTML = "";
        document.getElementById("dice2").innerHTML = "";
        document.getElementById("dice3").innerHTML = "";
        document.getElementById("dice4").innerHTML = "";
        document.getElementById("dice5").innerHTML = "";*/
  }
  var dices = document.getElementsByClassName("dice");
  for (var z = 0; z < dices.length; z++) {
    dices[z].addEventListener("click", function () {
      hold[this.dataset.index] = hold[this.dataset.index] == 0 ? 1 : 0;
    });
  }
}

function changeColorD1() {
  document.getElementById("dice1").style.backgroundColor = "lightgreen";
}

function changeColorD2() {
  document.getElementById("dice2").style.backgroundColor = "lightgreen";
}

function changeColorD3() {
  document.getElementById("dice3").style.backgroundColor = "lightgreen";
}

function changeColorD4() {
  document.getElementById("dice4").style.backgroundColor = "lightgreen";
}

function changeColorD5() {
  document.getElementById("dice5").style.backgroundColor = "lightgreen";
}

function resetDices() {
  (i % 3 == 0) resetData();
}

/* Dette var et forsøg på at lave cookie banner
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});
setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 20);
*/

let navne = [];

const addNavn = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let navn = {
    //id: Date.now(),
    person: document.getElementById("person").value,
    etere: document.getElementById("1'ere").value,
    toere: document.getElementById("2'ere").value,
    treere: document.getElementById("3'ere").value,
    firere: document.getElementById("4'ere").value,
    femmere: document.getElementById("5'ere").value,
    seksere: document.getElementById("6'ere").value,
    antal: document.getElementById("antal").value,
    bonus: document.getElementById("bonus").value,

    "1 par": document.getElementById("1 par").value,
    "2 par": document.getElementById("2 par").value,
    "3 ens": document.getElementById("3 ens").value,
    "4 ens": document.getElementById("4 ens").value,
    "Lille straight": document.getElementById("Lille straight").value,
    "Stor straight": document.getElementById("Stor straight").value,
    Hus: document.getElementById("Hus").value,
    Chancen: document.getElementById("Chancen").value,
    YATZY: document.getElementById("YATZY").value,
    "Samlet Score": document.getElementById("Samlet Score").value,
  };
  navne.push(navn);
  document.forms[0].reset(); // sletter input så inputfeldter er klar til næste spil
  document.querySelector(".form").reset();

  //viser diverse navn+score på dokumentet
  console.warn("added", { navne });
  let pre = document.querySelector("#msg #pre");
  pre.textContent = "\n" + JSON.stringify(navne, "\t", 2);

  //Gemmer alt info i localStorage
  localStorage.setItem("MyNavnList", JSON.stringify(navne));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addNavn);
});

let navne2 = [];

const addNavn2 = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let navn2 = {
    //id: Date.now(),
    person: document.getElementById("person1").value,
    etere: document.getElementById("1'ere1").value,
    toere: document.getElementById("2'ere1").value,
    treere: document.getElementById("3'ere1").value,
    firere: document.getElementById("4'ere1").value,
    femmere: document.getElementById("5'ere1").value,
    seksere: document.getElementById("6'ere1").value,
    antal: document.getElementById("antal1").value,
    bonus: document.getElementById("bonus1").value,

    "1 par": document.getElementById("1 par1").value,
    "2 par": document.getElementById("2 par1").value,
    "3 ens": document.getElementById("3 ens1").value,
    "4 ens": document.getElementById("4 ens1").value,
    "Lille straight": document.getElementById("Lille straight1").value,
    "Stor straight": document.getElementById("Stor straight1").value,
    Hus: document.getElementById("Hus1").value,
    Chancen: document.getElementById("Chancen1").value,
    YATZY: document.getElementById("YATZY1").value,
    "Samlet Score": document.getElementById("Samlet Score1").value,
  };
  navne2.push(navn2);
  document.forms[0].reset(); // sletter input så inputfeldter er klar til næste spil
  document.querySelector(".form1").reset();

  //viser diverse navn+score på dokumentet
  console.warn("added", { navne2 });
  let pre = document.querySelector("#msg #pre1");
  pre.textContent = "\n" + JSON.stringify(navne2, "\t", 2);

  //Gemmer alt info i localStorage
  localStorage.setItem("MyNavn2List", JSON.stringify(navne2));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn1").addEventListener("click", addNavn2);
});
