function fill(ctx, x, y, wid, hei, color, t)
{
    for (let j = y; j < y + hei; j += 1)
    {
        for (let i = x; i < x + wid; i += 1)
        {
            let clr = color(i, j, t);
            ctx.fillStyle = `rgba(${clr.red}, ${clr.green}, ${clr.blue}, ${clr.alpha})`
            ctx.fillRect(i, j, 1, 1)
        }
    }
}