window.onload = function()
{
    let canvas = document.getElementById('mainCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "#1a1a26";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}