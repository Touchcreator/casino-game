import { getCash, setCash } from "./utils.js";

const resetButton = document.getElementById("game-section")

resetButton.addEventListener("click", () => {
    if (getCash() < 10) {
        setCash(1000);
    }
})