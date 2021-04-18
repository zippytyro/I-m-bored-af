// jshint esversion: 6
const express = require("express");
const mongoose = require("mongoose");
const api  = require("./controller/api");
const path = require("path");
const ejs = require("ejs");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", (req, res)=>{
   res.sendFile(__dirname + "./public/index.html");
});

app.get("/api", (req, res)=>{
    res.send(api.sendData());
});

app.get("/i", (req, res)=>{
  res.render("index");
});

app.post("/i", (req, res)=>{
  console.log(req.body);
});

app.get("/*", (req, res)=>{
  res.send("LOL Not found");
});

app.listen(port, ()=>{
    console.log("Server running at 3000");
});