// jshint esversion:6
const button = document.getElementById('btn');
const activity = document.getElementById('activity');
const participants  = document.getElementById('participants');
const type  = document.getElementById('type');
const paragraph  = document.getElementById('paragraph');
const date = document.getElementById('date');

// fetching the data from the API
function getActivity(){
    fetch('https://boredapi.com/api/activity')
  .then(response => response.json()) 
  .then(data => showResponse(data)); // passing the data as a parameter to a function which displays the data.
}

// Puts the data on the UI and calls another function which makes the para visible.
function showResponse(data){
    activity.innerHTML = data.activity;
    participants.innerHTML = data.participants;
    type.innerHTML = data.type;
    showParagraph();
}

function showParagraph(){
    paragraph.style.visibility = "visible";
}
// Click event listner.
button.addEventListener("click", function(){
    getActivity();
});

function getDate(){
    let currentdate = new Date().getFullYear();
    return currentdate;
}
date.innerHTML = "© "+getDate()+" I'm bored";