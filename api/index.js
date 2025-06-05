const express = require("express");
const path = require("path");

const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

jsonParser = bodyParser.json();

function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

// all the actual server stuff, everything above is setting neseccary things (how tf do you spell that word)

app.set("view engine", "ejs");

// remove this when i wanna put the database up
app.get("/database", async (req, res, next) => {
    res.status(403).sendFile(path.join(__dirname + ".." + "/403.html"))
})

app.post("/database", async (req, res, next) => {
    res.status(403).sendFile(path.join(__dirname + ".." + "/403.html"))
})

/* everything commented is database code, i disabled it for you for... certain reasons
app.get("/database", async (req, res, next) => {
    res.sendFile(path.join(__dirname + "/data.json"))
})

app.post("/database", jsonParser, (req, res) => {
    let dataFile = JSON.parse(fs.readFileSync(path.join(__dirname + "../data.json")));
    if (req.body.name.trim().length != 0 && req.body.userID != null && req.body.cash != null) {
        for (let i = 0; i < dataFile.length; i++) {
            if (dataFile[i].userID == req.body.userID) {
                dataFile.splice(i,1)
            }
        }
        dataFile.push(req.body)
        res.status(200).send("status 200")
    } else {
        res.status(400).send("status 400")
    }
    fs.writeFile(path.join(__dirname + "../data.json"),JSON.stringify(dataFile), (err) => {
        if (err) throw err;
        return;
    })
    
})

*/
app.use(express.static(path.join(__dirname + ".." + "/static"), {
    extensions: ["html", "htm"],
}));

app.get("/", (req, res) => res.sendFile("/static/index.html"))

app.use(function(req,res){
    res.status(404).sendFile(path.join(__dirname + ".." + "/404.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});

module.exports = app;