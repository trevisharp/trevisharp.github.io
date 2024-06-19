const draw = ctx =>
{
    
}

const clear = ctx =>
{
    ctx.fillStyle = "#1a1a26";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const frame = ctx =>
{
    clear(ctx)
    draw(ctx);
    requestFrame(ctx);
}

const requestFrame = ctx =>
    window.requestAnimationFrame(() => frame(ctx))

window.onload = function()
{
    canvas = document.getElementById('mainCanvas');
    ctx = canvas.getContext('2d');
    requestFrame(ctx);
}