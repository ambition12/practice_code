var timerId;

function timeoutStart(){
    timerId = setTimeout(whattime,3000);
}

function timeoutStop(){
    clearTimeout(timerId);
}

function intervalStart(){
    clearInterval(timerId);
    timerId = setInterval(whattime,2000);
}

function intervalStop(){
    clearInterval(timerId);
}

function whattime(){
    t = new Date();
    document.getElementById("info").textContent =t;
}
