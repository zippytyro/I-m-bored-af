// jshint esversion: 6
const express = require("express");
const mongoose = require("mongoose");
const os = require("os");
const app = express();


app.use(express.static("public"));
const port = process.env.PORT || 3000;

const free = os.freemem();
app.get("/RAM", (req, res)=>{
    res.send(`Total RAM available ${free/1000000000} GB`);
});

app.listen(port, ()=>{
    console.log("Server running at 3000");
});