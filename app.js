// jshint esversion: 6
const express = require("express");
const mongoose = require("mongoose");
const api  = require("./controller/api");
const ejs = require("ejs");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// Global variables
let rewriteCounts = 0;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// GET  for /
app.get("/", (req, res)=>{
  res.render("index");
});

app.get("/api/v1", (req, res)=>{
    let data = api.sendData();
    res.send(data);
    // fs.appendFileSync('data.json', data);
});

app.get("/submit", (req, res)=>{
  res.render("submit");
});

app.post("/submit", (req, res)=>{
  console.log(req.body);
});

app.get("/*", (req, res)=>{
  res.send("LOL Not found");
});

app.listen(port, ()=>{
    console.log("Server running at 3000");
});