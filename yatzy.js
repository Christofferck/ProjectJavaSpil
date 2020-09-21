
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;

let roll = function() {
        x = Math.random();
        x = Math.floor(x * 6 + 1); //* 6 = antal muligheder, +1 =  math.random * 6 + 1//
    
    switch (x) {
        case 1:
            one++;
        break;
        case 2:
            two++;
        break;
        case 3:
            three++;
        break;
        case 4:
            four++;
        break;
        case 5:
            five++;
        break;
        default:
            six++;
        break;

    }

        y = Math.random();
        y = Math.floor(y * 6 + 1); //* 6 = antal muligheder, +1 =  math.random * 6 + 1//
    
    switch (y) {
        case 1:
            one++;
        break;
        case 2:
            two++;
        break;
        case 3:
            three++;
        break;
        case 4:
            four++;
        break;
        case 5:
            five++;
        break;
        default:
            six++;
        break;

    }

    f = Math.random();
    f = Math.floor(f * 6 + 1);

    switch (f) {
        case 1:
            one++;
        break;
        case 2:
            two++;
        break;
        case 3:
            three++;
        break;
        case 4:
            four++;
        break;
        case 5:
            five++;
        break;
        default:
            six++;
        break; 
    }

    g = Math.random();
    g = Math.floor(g * 6 + 1);

    switch (g) {
        case 1:
            one++;
        break;
        case 2:
            two++;
        break;
        case 3:
            three++;
        break;
        case 4:
            four++;
        break;
        case 5:
            five++;
        break;
        default:
            six++;
        break; 
    }

    h = Math.random();
    h = Math.floor(h * 6 + 1);

    switch (h) {
        case 1:
            one++;
        break;
        case 2:
            two++;
        break;
        case 3:
            three++;
        break;
        case 4:
            four++;
        break;
        case 5:
            five++;
        break;
        default:
            six++;
        break; 
    }

    document.getElementById("dice1").innerHTML = x;
    document.getElementById("dice2").innerHTML = y;
    document.getElementById("dice3").innerHTML = f;
    document.getElementById("dice4").innerHTML = g;
    document.getElementById("dice5").innerHTML = h;

}

let diceClicked = function () {
    
}

