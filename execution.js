'use strict';
const isValid = function(e) {
    let name = document.getElementById("nameSave").value;
    if (name.value === "") { // hvis born eller name ikke er udfyldt, kan det ikke submittes //
        window.alert("Name must be filled in");
        name.focus();
        e.preventDefault(); // preventer submit //
        return false;
    } else {
        createCookie(name.value + (timeThen - timeNow) * 0.001, 42, 0.00094444); // name.value = navnet angivet, born = datoen, 42 = værdien, 0.00.. = hvor lang tid cookien er aktiveret //
        return true;
    }
}

const getstarted = function() {
    console.log(`Cookie niels1945-11-25? ${readCookie('niels1945-11-25')}`);
    console.log(`Cookies: ${document.cookie}`)
    document.addEventListener('btnSave', isValid);
}
window.addEventListener('load', getstarted); // fortæller at når DOM'en er loaded, kører den funktionen getstarted //

/* 0.00094444 = hvor lang tid et givent antal tid svarer til på et år. Det er derfor styrende for,
hvor lang tid en cookie er relevant. Hvis man sætter den til 9999 fx, vil cookien være aktiveret i 
9999 år. Hvis værdien er 1.0, vil cookien vare i et år. */