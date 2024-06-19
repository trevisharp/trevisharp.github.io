let dots = [
    createDot(40, 40),
    createDot(60, 60),
    createDot(80, 80),
    createDot(100, 100),
    createDot(120, 120)
]
var baseTime = Date.now() / 1000
var newTime = 0
var oldTime = 0

const draw = ctx =>
{
    let dt = newTime - oldTime
    dots.forEach(dot => {
        dot.move(dt)
    });
    dots.forEach(dot => {
        dot.draw(ctx, newTime)
    });
}

const clear = ctx =>
{
    ctx.fillStyle = "#1a1a26";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const frame = ctx =>
{
    newTime = Date.now() / 1000 - baseTime
    clear(ctx)
    draw(ctx);
    requestFrame(ctx);
    oldTime = newTime
}

const requestFrame = ctx =>
    window.requestAnimationFrame(() => frame(ctx))

window.onload = function()
{
    canvas = document.getElementById('mainCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;
    requestFrame(ctx);
}