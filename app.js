// jshint esversion: 6
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const api  = require("./controller/api");
const ejs = require("ejs");
const data = require("./data.js");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// Global variables
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// Mongodb database
// mongoose.connect(process.env.DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// connecting mongoDB locally.

mongoose.connect("mongodb://localhost:3000:27017/teachersBayDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
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


for(let i=0; i<data.length; i++){
    console.log(`${data[i]}  ${i}`);
}