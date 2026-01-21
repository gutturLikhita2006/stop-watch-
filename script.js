let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Function to format time
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    // Format numbers to always have 2 digits
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

// Function to update the display
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

// Start and Pause Logic
function startStop() {
    if (!isRunning) {
        // START
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            print(timeToString(elapsedTime));
        }, 1000);
        document.getElementById("startPause").innerHTML = "Pause";
        document.getElementById("startPause").style.backgroundColor = "#ffc107";
        isRunning = true;
    } else {
        // PAUSE
        clearInterval(timerInterval);
        document.getElementById("startPause").innerHTML = "Start";
        document.getElementById("startPause").style.backgroundColor = "#28a745";
        isRunning = false;
    }
}

// Reset Logic
function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("startPause").innerHTML = "Start";
    document.getElementById("startPause").style.backgroundColor = "#28a745";
    document.getElementById("lapsList").innerHTML = "";
}

// Lap Logic
function lap() {
    if (isRunning) {
        let li = document.createElement("li");
        li.innerText = "Lap: " + timeToString(elapsedTime);
        document.getElementById("lapsList").appendChild(li);
    }
}
