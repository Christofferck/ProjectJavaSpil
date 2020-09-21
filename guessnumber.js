let a = Math.floor(Math.random() * (1000)) + 1;
let i = 0;
let submitnumber = document.getElementById("submitnumber");
let showCount = document.getElementById("showcount");


function inputFunc() {
    let b = document.getElementById("inputnumber").value;

    while (b !== a) {
        if (b == a) {
            document.getElementById("showresult").innerHTML = ("You're right!");
          break; // Stops loop

        } else if (b < 1 || b > 1000) {
            alert("Your number must be betwen 1-1000")
        } else if (b > a) {
            document.getElementById("showresult").innerHTML = (`The number is lower than ${b}`); 
          break;
        } else (b < a)
            document.getElementById("showresult").innerHTML = (`The number is higher than ${b}`);
        break;
        }
        i++;
        if (i === 10)
            alert("you have used your tries");

        console.log(`${b}`);
        console.log(i);
        }
        
console.log(a);



