let millisElmt = document.getElementById("millis");
let secondsElmt = document.getElementById("seconds");
let minutesElmt = document.getElementById("minutes");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");


let millis = 0;
let seconds = 0;
let minutes = 0;

let interval = null;


function start() {
    if (interval === null) {
        interval = setInterval(setTime, 10);
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
    
}

function reset() {
    clearInterval(interval);
    interval = null;
    millis = 0;
    seconds = 0;
    minutes = 0;
    millisElmt.innerText = "00";
    secondsElmt.innerText = "00";
    minutesElmt.innerText = "00";
}

function setTime() {
    millis += 10;

    millisElmt.innerText = millis.toString().substring(0, 2);

    if (millis === 1000) {
        millis = 0;
        seconds++;
        secondsElmt.innerText = seconds.toString().padStart(2, "0");
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        minutesElmt.innerText = minutes.toString().padStart(2, "0");
    }

} 
