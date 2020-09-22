let a = Math.floor(Math.random() * (1000)) + 1;
let i = 0;
let submitnumber = document.getElementById("submitnumber");
let showCount = document.getElementById("showcount");


function inputFunc() {
    let b = document.getElementById("inputnumber").value;

    while (b !== a) {
        if (b == a) {
            document.getElementById("showresult").innerHTML = ("You win!");
          break;

        } else if (b < 1 || b > 1000) {
            alert("Your number must be betwen 1-1000");
            location.reload();
        } else if (b > a) {
            document.getElementById("showresult").innerHTML = (`The number is lower than ${b}`); 
          break;
        } else (b < a)
            document.getElementById("showresult").innerHTML = (`The number is higher than ${b}`);
        break;
        }
        i++;
        if (i === 10)
            alert("you have used your tries, computer wins! click try again!");

        console.log(`${b}`);
        document.getElementById("showcount").innerHTML = "Number of tries: " + i;
        }
    
    function resetFunc() {
        location.reload();
    }
    console.log("guess the number: " + a);