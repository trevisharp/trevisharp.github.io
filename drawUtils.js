function fill(ctx, x, y, wid, hei, color, t)
{
    for (let j = y; j < y + hei; j += 2)
    {
        for (let i = x; i < x + wid; i += 2)
        {
            let clr = color(i, j, t);
            ctx.fillStyle = `rgba(${clr.red}, ${clr.green}, ${clr.blue}, ${clr.alpha})`
            ctx.fillRect(i, j, 2, 2)
        }
    }
}