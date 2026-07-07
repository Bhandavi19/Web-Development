let timer;
let totalTime;
let remainingTime;
let isPaused = false;
const alarmSound = document.getElementById("alarm-sound");

// Elements
const timeInput = document.getElementById("time-input");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer-display");

function startTimer() {
    const inputMinutes = parseInt(timeInput.value);

    if (isNaN(inputMinutes) || inputMinutes <= 0) {
        alert("Please enter a valid time in minutes.");
        return;
    }

    totalTime = inputMinutes * 60;
    remainingTime = totalTime;

    startBtn.disabled = true;
    timeInput.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;

    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (remainingTime <= 0) {
        clearInterval(timer);
        timerDisplay.innerText = "Time’s Up!";
        timerDisplay.classList.add("red-text");
        alarmSound.play();
        return;
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (remainingTime < 10) {
        timerDisplay.classList.add("red-text");
    }

    remainingTime--;
}

function pauseTimer() {
    if (isPaused) {
        timer = setInterval(updateTimer, 1000);
        pauseBtn.innerText = "Pause";
    } else {
        clearInterval(timer);
        pauseBtn.innerText = "Resume";
    }
    isPaused = !isPaused;
}

function resetTimer() {
    clearInterval(timer);
    timerDisplay.innerText = "00:00";
    timerDisplay.classList.remove("red-text");

    startBtn.disabled = false;
    timeInput.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    pauseBtn.innerText = "Pause";
    isPaused = false;
}

function setPreset(minutes) {
    timeInput.value = minutes;
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
