// jshint esversion: 6
const data  = require("../public/data");

module.exports =  (req, res) => {
  if (req.method == "GET") {
    let length = data.length;
    let random = Math.floor(Math.random()*length)+1;
    let activity = data[random];
    res.send(JSON.stringify(activity));
  }
};