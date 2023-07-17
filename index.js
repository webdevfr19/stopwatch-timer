// DOM variables

let hours = document.getElementById('hoursLabel');
let minutes = document.getElementById('minutesLabel');
let seconds = document.getElementById('secondsLabel');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');

// setInterval variable

let timer;

// hour, minute, second variables

let h = 0;
let m = 0;
let s = 0;

h_f = formatTime(h);
m_f = formatTime(m);
s_f = formatTime(s);

// time format

function formatTime(num) {
    return num.toString().padStart(2, '0');
  }

//start timer function

function startTimer(){
    // setting intervals for 1000 milliseconds
    timer = setInterval(function() {
        s += 1;
        if(s >= 60){ // 60 seconds
            m += 1;
            s = 0;
        }
        else if(m >= 60){ //60 minutes
            h += 1;
            m = 0;
        }
        
        // formatting time to add '0' in front of numbers
        hours.innerHTML = formatTime(h);
        minutes.innerHTML = formatTime(m);
        seconds.innerHTML = formatTime(s);
        
        console.log(h, m, s);
    }, 1000);
}

// event listener for startButton button
startButton.addEventListener('click', startTimer);

// stopping the timer
stopButton.onclick = function(){
    clearInterval(timer);
}

// resetting the stopwatch
resetButton.onclick = function(){
    h = 0;
    m = 0;
    s = 0;
    //setting time and DOM back to 00;
    hours.innerHTML = formatTime(h);
    minutes.innerHTML = formatTime(m);
    seconds.innerHTML = formatTime(s);
    console.log(h, m, s);
    clearInterval(timer);
}
