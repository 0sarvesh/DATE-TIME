function updateclock(){
const d = new Date();
let year = d.getFullYear();
let hours = d.getHours();
let days = d.getDate();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
document.getElementById("demo").innerHTML = year;
document.getElementById("hours").innerHTML = hours;
document.getElementById("mins").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("days").innerHTML = days;
}
function initclock(){
    updateclock();
    window.setInterval("updateclock()",1);
}