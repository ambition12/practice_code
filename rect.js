var ctx;

function init(){
    var canvas = document.getElementById("canvas");

    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#00FFFF";
    ctx.lineWidth = 5;
    ctx.fillRect(100,30,80,50);

    ctx.strokeRect(200,30,80,50);
    ctx.fillRect(300,30,80,50);
    ctx.clearRect(320,50,50,20);
}
