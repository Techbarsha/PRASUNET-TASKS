let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let x;
hours.innerText = '00';
minutes.innerText = '00';
seconds.innerText = '00';
mseconds.innerText = '00';

let current = false;

pause.onclick = function() {
    if (current === false) {
        clearInterval(x);
        current = true;
    } else {
        timer();
        current = false;
    }
};

reset.onclick = function() {
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    hours.innerText = '00';
    minutes.innerText = '00';
    seconds.innerText = '00';
    mseconds.innerText = '00';
    clearInterval(x);
    secondDeg = 0;
    hoursDeg = 0;
    minutDeg = 0;
    secondsUpd();
    hoursUpd();
    minutsUpd();
    document.getElementById('laps').innerHTML = ''; // Clear lap times
};

start.onclick = function() {
    timer();
};

lap.onclick = function() {
    const lapTime = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}:${ms < 10 ? '0' + ms : ms}`;
    const lapElement = document.createElement('div');
    lapElement.className = 'lap-time';
    lapElement.innerText = lapTime;
    document.getElementById('laps').appendChild(lapElement);
};

function secondsUpd() {
    let secondDeg = s * 6;
    arrow1.style.transform = 'rotate(' + secondDeg + 'deg)';
}

function hoursUpd() {
    let hoursDeg = (h * 30) + (m * 0.5);
    arrow2.style.transform = 'rotate(' + hoursDeg + 'deg)';
}

function minutsUpd() {
    let minutDeg = m * 6;
    arrow3.style.transform = 'rotate(' + minutDeg + 'deg)';
}

let timer = function() {
    x = setInterval(function() {
        secondsUpd();
        hoursUpd();
        minutsUpd();
        ms++;
        hours.innerText = h < 10 ? '0' + h : h;
        minutes.innerText = m < 10 ? '0' + m : m;
        seconds.innerText = s < 10 ? '0' + s : s;
        mseconds.innerText = ms < 10 ? '0' + ms : ms;
        if (ms >= 99) {
            s++;
            ms = 0;
            if (s > 59) {
                m++;
                s = 0;
                if (m > 59) {
                    h++;
                    m = 0;
                }
            }
        }
    }, 10);
    current = false;
};
