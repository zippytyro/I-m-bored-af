// jshint esversion: 6
const data = require("../data.js");

// Send data to /api
const sendData = ()=>{
    let length = data.length;
    let random = Math.floor((Math.random() * length-1));
    let activity =  data[random];
    activity = JSON.stringify(activity);
    console.log(activity);
    return activity;
};

module.exports = {sendData};