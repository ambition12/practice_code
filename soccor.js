var ctx;

function gobj(id){
    return document.getElementById(id)
}

function init(){
    var canvas = gobj("canvas");
    ctx = canvas.getContext("2d");
    paint();
}

function paint(){
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,600,300);

    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(300,0);
    ctx.lineTo(300,300);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeRect(0,0,600,300);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.rect(0,100,50,100);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(550,100,50,100);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300,150,50,0,Math.PI *2);
    ctx.stroke();
}
