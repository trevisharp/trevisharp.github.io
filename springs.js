const createDot = (x, y) => {
    let seed = 10 * Math.random()
    let speed = 1 + 2 * Math.random()
    let dx = 0
    let dy = 0
    return {
        move: dt => {
            dy += 9.8 * dt;
            x += dx * dt;
            y += dy * dt;
        },
        draw: (ctx, t) => {
            let dist = (i, j, t) =>
            {
                let di = i - x;
                let dj = j - y;
                let r = di * di + dj * dj;
                let timeFactor = (Math.sin(speed * t + seed) + 1) / 3
                let force = Math.max(0, 1 -  r / 40 + 1.2 * timeFactor)
                return {
                    red: 255,
                    green: 255,
                    blue: 255,
                    alpha: force
                }
            };

            fill(ctx, x - 15, y - 15, 30, 30, dist, t)
        }
    }
}