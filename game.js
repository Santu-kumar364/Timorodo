let workTittle=document.querySelector("#work");
let breakTittle=document.querySelector("#break");

let workTime=5;
let breakTime=2;
let seconds="00";
window.onload=() => {
    document.querySelector("#minutes").innerHTML=workTime;
    document.querySelector("#seconds").innerHTML=seconds;
    workTittle.classList.add("active");
}

function start () {
    //change buttons
    document.getElementById('start').style.display="none";
    document.querySelector('#reset').style.display="block";

    seconds=59;
    let workMinutes=workTime-1;
    let breakMinutes=breakTime-1;
    let breakCount=0;
    let timerFunction=() => {
        document.querySelector("#minutes").innerHTML=workMinutes;
        document.querySelector("#seconds").innerHTML=seconds;
        seconds=seconds-1;
        if (seconds==0) {
            workMinutes-=1;
            if (workMinutes==-1) {
                if (breakCount==0) {
                    workMinutes=breakMinutes;
                    breakCount=1;
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }
                else {
                    breakMinutes=workMinutes;
                    breakCount=0;
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds=59;
        }
    }
    setInterval(timerFunction, 1000);
}
 