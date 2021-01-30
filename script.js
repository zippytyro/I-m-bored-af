// jshint esversion:6
function getData(){
    fetch('https://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => console.log(data));
}
