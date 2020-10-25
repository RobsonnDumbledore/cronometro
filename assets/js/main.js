const clock = document.querySelector('#clock');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
let seconds = 0;
let timer;

start.addEventListener('click', function(){
    startClock();
    controllStyle('started');
});

pause.addEventListener('click', function(){
    controllStyle('paused');
    clearInterval(timer);
})

reset.addEventListener('click', function(){
    controllStyle();
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    seconds = 0;
});

function controllStyle(status){
    if(status === 'started'){
        start.classList.add('bg-warning');
        pause.classList.remove('bg-warning');
        reset.classList.remove('bg-warning');
    }else if(status === 'paused'){
        pause.classList.add('bg-warning');
        start.classList.remove('bg-warning');
        reset.classList.remove('bg-warning');
    }else{
        pause.classList.remove('bg-warning');
        start.classList.remove('bg-warning');
        reset.classList.remove('bg-warning');
    }
}

function getTimeFromSeconds(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function startClock(){
    timer = setInterval(function(){
        seconds++;
        clock.innerHTML= getTimeFromSeconds(seconds);
    },1000);
}