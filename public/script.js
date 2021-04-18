// jshint esversion:6
"Use strict";
import {data} from "./data.js";

const boredButton = document.getElementById('boredButton');
const activity = document.getElementById('activity');
const participants  = document.getElementById('participants');
const type  = document.getElementById('type');
const paragraph  = document.getElementById('paragraph');
const link = document.getElementById("link");
const date = document.getElementById('date');
const tweet = document.getElementById('tweet');

// fetching the data from the API
function getActivity(){
    let length = data.length;
    let random = Math.floor(Math.random()*length)+1;
    let activity = data[random];
    // Sending the activity
    showResponse(activity);
}

// Puts the data on the UI and calls another function which makes the para visible.
function showResponse(data){
    let url = "";
    activity.innerHTML = data.activity;
    participants.innerHTML = data.participants;
    type.innerHTML = data.type;
    // Check if there's a link available
    if(data.link == ""){
        link.innerHTML = "";
    } else {
        url = data.link;
        link.href = url;
        link.innerHTML =  "&#x1f517; "+url.substring(0, 20)+"...";
    }
    tweet.href = "https://twitter.com/intent/tweet/?text=Bored? "+data.activity+"&hashtags="+data.type+" "+url+ " (Im-bored.now.sh)";
    showContent();
}

function showContent(){
    paragraph.style.visibility = "visible";
}
// Click event listner.
boredButton.addEventListener("click", function(){
    getActivity();
});
// Get latest year for footer.
function getDate(){
    let currentdate = new Date().getFullYear();
    return currentdate;
}
date.innerHTML = "© "+getDate()+" I'm bored";
