// jshint esversion: 6
const express = require("express");
const mongoose = require("mongoose");
const os = require("os");
const path = require("path");
const data = require("./data");
const app = express();


app.use(express.static("public"));
const PORT = 3000;
const free = os.freemem();
app.get("/RAM", (req, res)=>{
    res.send(`Total RAM available ${free/1000000000} GB`);
    console.log(req);
});


app.get("/", (req, res)=>{
    res.sendFile("index.html");
});

app.get("/api", (req, res)=>{
    let length = data.length;
    let random = Math.floor(Math.random()*length)+1;
    let activity = data[random];
    res.send(JSON.stringify(activity));
});

app.listen(PORT || 3000, ()=>{
    console.log("Server running at 3000");
});