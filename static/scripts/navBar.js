import { nFormatter, getCash } from "./utils.js";

$(document).ready(function() {
    // checking for cash

    if (localStorage.getItem("cash") == null) {
        localStorage.setItem("cash", 1000);
    }
    
    cash = Number(localStorage.getItem("cash"));
    
    document.getElementById("cash-span").innerText = "Cash: $" + nFormatter(cash,2);

    // and now we check for the all new user id

    if (localStorage.getItem("userID") == null) {
        localStorage.setItem("userID", Date.now());
    }


})


const betInput = document.getElementById("bet-amount");

document.getElementById("all-in").addEventListener("click", () => {
    betInput.value = getCash();
});

document.getElementById("half-bet").addEventListener("click", () => {
    betInput.value = betInput.value/2;
});

document.getElementById("double-bet").addEventListener("click", () => {
    betInput.value = betInput.value*2;
});

document.getElementById("tenx-bet").addEventListener("click", () => {
    betInput.value = betInput.value*10;
});