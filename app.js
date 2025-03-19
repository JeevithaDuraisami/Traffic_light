var stop = document.getElementById("stop");
var ready = document.getElementById("ready");
var go = document.getElementById("go");

function btn1(){
    stop.style.backgroundColor = "red";  
    ready.style.backgroundColor = "white";
    go.style.backgroundColor = "white";
}

function btn2(){
    ready.style.backgroundColor = "yellow"; 
    stop.style.backgroundColor = "white";
    go.style.backgroundColor = "white";
}

function btn3(){
    go.style.backgroundColor = "green";  
    stop.style.backgroundColor = "white";  
    ready.style.backgroundColor = "white";
}