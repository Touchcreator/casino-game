import { addToCash, getCash, nCr } from "./utils.js";

const sideLength = 5;
const boardDiv = document.getElementById("game-board");
const betInput = document.getElementById("bet-amount");

let board = [];
let win = null;
let ableToPlay = true;
let safeSquares = Number;
let multiplier = 0;
let houseEdge = 0.01;
let mineCount = Number;
let fixedMultiplier = null;
let bet = Number;

document.getElementById("cash-out").style.backgroundColor = "#111a17";

function initializeBoard() {
    for (let i = 0; i < sideLength; i++) {
        board[i] = [];
        for (let j = 0; j < sideLength; j++) {
            board[i][j] = {
                isMine: false,
                revealed: false,
                count: 0,
            };
        }
}}

function placeMines() {
    let minesPlaced = 0;
    mineCount = document.getElementById("mine-count").value;
    while (minesPlaced < mineCount) {
        const row = Math.floor(
            Math.random() * sideLength
        );
        const col = Math.floor(
            Math.random() * sideLength
        );
        if (!board[row][col].isMine) {
            board[row][
                col
            ].isMine = true;
            minesPlaced++;
        }
    }
    renderBoard();
}

function revealCell(row, col) {
    if (win == null){
        if ((board[row][col].isMine == false) && (board[row][col].revealed == false)) {
            safeSquares-=1;
            multiplier = 0.5 * (mineCount) ** ((((25-mineCount)-safeSquares) + mineCount / 5) / 5) - 0.5;
            fixedMultiplier = multiplier.toFixed(2);
            document.getElementById("safe-squares").innerHTML = "Safe Squares: " + (safeSquares);
            document.getElementById("multi-span").innerHTML = "Multiplier: " + (fixedMultiplier) + "x";
        }
        board[row][col].revealed = true;
        if (board[row][col].isMine == true) {
            win = false;
            document.getElementById("cash-out").style.backgroundColor = "#111a17";
        }
        renderBoard();
    }
}

function renderBoard() {
    boardDiv.innerHTML = "";
    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";

        if (board[i][j].revealed == true) {
            cell.classList.add("revealed");
            if (board[i][j].isMine == true) {
                cell.classList.add("mine")
                cell.classList.remove("revealed")
            }
        }

        if (win == false) {
            if (board[i][j].isMine == true) {
                cell.classList.add("mine");
                ableToPlay = true;
                document.getElementById("play-btn").style.backgroundColor = "rgb(44, 187, 0)";
            }
        }

        cell.addEventListener("click", () => {
            revealCell(i,j);
        })
        boardDiv.appendChild(cell);
        }
    }
}

function makeBoard() {
    if (ableToPlay == true) {
        boardDiv.innerHTML = "";
        if ((document.getElementById("mine-count").value >= 1) && (document.getElementById("mine-count").value <= 24)) {
            if (betInput.value >= 10 && betInput.value <= getCash()) {
                bet = betInput.value;
                addToCash(-(bet));
                win = null;
                initializeBoard();
                placeMines();
                renderBoard();
                ableToPlay = false;
                document.getElementById("play-btn").style.backgroundColor = "#003d00";
                safeSquares = 25-document.getElementById("mine-count").value;
                document.getElementById("safe-squares").innerHTML = "Safe Squares: " + (safeSquares);
                fixedMultiplier = multiplier.toFixed(2);
                document.getElementById("multi-span").innerHTML = "Multiplier: 0.00x";
                document.getElementById("cash-out").style.backgroundColor = "#37534a";
            }
        }
    }
}

function cashOut() {
    if (ableToPlay == false) {
        addToCash(Number(multiplier*bet));
        ableToPlay = true;
        win = false;
        document.getElementById("cash-out").style.backgroundColor = "#111a17";
        document.getElementById("play-btn").style.backgroundColor = "rgb(44, 187, 0)";
    }
}

document.getElementById("play-btn").addEventListener("click", () => {
    makeBoard();
});

document.getElementById("cash-out").addEventListener("click", () => {
    cashOut();
});