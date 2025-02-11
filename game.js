let workTittle = document.querySelector("#work");
let breakTittle = document.querySelector("#break");

let workTime = 1; // Default 25 minutes for work
let breakTime = 2;  // Default 5 minutes for break
let seconds = 0; // Start with 00 seconds
let isWorkTime = true; // Track work/break state
let timer; // Store interval

window.onload = () => {
    document.querySelector("#minutes").innerHTML = workTime;
    document.querySelector("#seconds").innerHTML = "00";
    workTittle.classList.add("active");
};

function start() {
    // Prevent multiple timers from running
    clearInterval(timer);

    document.getElementById('start').style.display = "none";
    document.querySelector('#reset').style.display = "block";

    let minutes = isWorkTime ? workTime : breakTime;
    let seconds = 0;

    timer = setInterval(() => {
        document.querySelector("#minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.querySelector("#seconds").innerHTML = seconds.toString().padStart(2, '0');

        if (minutes === 0 && seconds === 0) {
            isWorkTime = !isWorkTime; // Toggle work/break
            minutes = isWorkTime ? workTime : breakTime;
            seconds = 0;

            // Switch active class for work/break
            if (isWorkTime) {
                breakTittle.classList.remove("active");
                workTittle.classList.add("active");
            } else {
                workTittle.classList.remove("active");
                breakTittle.classList.add("active");
            }
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
        }
    }, 1000);
}

// Reset function to stop the timer and reset values
document.querySelector("#reset").addEventListener("click", () => {
    clearInterval(timer);
    isWorkTime = true;
    document.querySelector("#minutes").innerHTML = workTime;
    document.querySelector("#seconds").innerHTML = "00";
    workTittle.classList.add("active");
    breakTittle.classList.remove("active");

    document.getElementById('start').style.display = "block";
    document.querySelector('#reset').style.display = "none";
});
 