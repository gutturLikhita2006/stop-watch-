let startTime;
let elapsedTime = 0;
let timerInterval;

// Convert time to string format
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Start and Pause Function
function startStop() {
    let btn = document.getElementById("startPause");
    
    if (btn.innerHTML === "Start") {
        // Start the timer
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").innerHTML = timeToString(elapsedTime);
        }, 10);
        btn.innerHTML = "Pause";
        btn.style.backgroundColor = "#f39c12"; // Change color to Orange on Pause
    } else {
        // Pause the timer
        clearInterval(timerInterval);
        btn.innerHTML = "Start";
        btn.style.backgroundColor = "#2ecc71"; // Change color back to Green
    }
}

// Reset Function
function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00:00";
    elapsedTime = 0;
    document.getElementById("startPause").innerHTML = "Start";
    document.getElementById("startPause").style.backgroundColor = "#2ecc71";
    document.getElementById("lapsList").innerHTML = "";
}

// Lap Function
function lap() {
    if (elapsedTime > 0) {
        let li = document.createElement("li");
        li.innerText = `Lap: ${timeToString(elapsedTime)}`;
        document.getElementById("lapsList").appendChild(li);
    }
}
