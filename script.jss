let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
    let diffInMin = time / 60000;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
    return `${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}:${ms.toString().padStart(2, "0")}`;
}

function startStop() {
    let btn = document.getElementById("startPause");
    if (btn.innerHTML === "Start") {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").innerHTML = timeToString(elapsedTime);
        }, 10);
        btn.innerHTML = "Pause";
    } else {
        clearInterval(timerInterval);
        btn.innerHTML = "Start";
    }
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00:00";
    elapsedTime = 0;
    document.getElementById("startPause").innerHTML = "Start";
    document.getElementById("lapsList").innerHTML = "";
}

function lap() {
    if (elapsedTime > 0) {
        let li = document.createElement("li");
        li.innerText = "Lap: " + timeToString(elapsedTime);
        document.getElementById("lapsList").appendChild(li);
    }
}
