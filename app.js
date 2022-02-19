const exp = require('constants');
const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const functions = require("./functions");

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res){
    res.render("index", {
        pageTitle: "Lekcja ALK 19.02",
        y: functions.add(2 ,6)
    });
})

app.get("/about", function (req, res){
    res.render("about")
})

app.listen(port, () => {
    console.log(`Serwer dziala na porcie ${port}`);
})