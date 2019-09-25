var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById('splits');


function printTime() {
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')) {
        btnLeft.innerText = "STOP";
        btnRight.innerText = "SPLIT";
        btnLeft.classList = ["btn stop"];
        btnRight.classList = ["btn split"];
        chronometer.startClick();
    } else {
        btnLeft.innerText = "START";
        btnRight.innerText = "RESET";
        btnLeft.classList = ["btn start"];
        btnRight.classList = ["btn reset"];
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    let timeElement = document.createElement("li");
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    timeElement.innerText = `${minutes} : ${seconds}`;
    splitList.appendChild(timeElement);
});

setInterval(printTime, 500);
