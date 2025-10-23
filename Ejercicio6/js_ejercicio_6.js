const time = document.getElementById('time'); 
const buttons = document.querySelectorAll('button'); 

let seconds = 0; 
let mins = 0; 
let hours = 0; 
let startTimer; 

function timer() {
    seconds +=1
    if (seconds === 60) {
        mins += 1; 
        seconds = 0;
        if (mins === 60) {
            hours +=1;
            mins = 0; 
            seconds = 0; 
        }
    }

    let h = String(hours).padStart(2, '0'); 
    let m = String(mins).padStart(2, '0'); 
    let s = String(seconds).padStart(2, '0');

    time.innerText = `${h}:${m}:${s}`; 
    
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        if (button.id === 'start') {
            startTimer = setInterval(timer, 1000)
        } else if (button.id === 'pause') {
            clearInterval(startTimer)
        } else {
            clearInterval(startTimer)
            time.innerText = '00:00:00';
            seconds = 0;
            mins = 0;
            hours = 0; 
        }
    })
})