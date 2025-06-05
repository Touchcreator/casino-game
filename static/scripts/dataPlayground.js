import { getCash } from "./utils.js";

const username = document.getElementById("username");

const userCash = document.getElementById("cashAmount");

document.getElementById("uploadbtn").addEventListener("click", async () => {
    await fetch("/database", {
        method: "POST",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            "name": username.value.trim(),
            "cash": getCash(),
            "userID": localStorage.getItem("userID")
        })
    })

    window.location.reload()
})

async function getLeaderboard() {
    const response = await fetch("/database", {
        method: "GET",
        headers: {
            "accept": "application/json"
        }
    });

    return response.json();
}

const leaderboardData = await getLeaderboard();

function buildTable(data) {
    const table = document.getElementById("leaderboard-table")

    for (let i = 0; i < data.length; i++) {
        var row = `<tr>
                <td>${data[i].name}</td>
                <td>${data[i].cash}</td>
                </tr>`
        table.innerHTML += row
    }
}

buildTable(leaderboardData)
