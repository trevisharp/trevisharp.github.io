const noise = range =>
    range * (Math.random() - 0.5);

const approxDot = (x, y) =>
    createDot(x + noise(15), y + noise(15))

const drawText = () =>
{
    let dots = [
        approxDot(60, 60),
        approxDot(180, 60),
        approxDot(300, 60),
        approxDot(300, 120),
        approxDot(220, 120),
        approxDot(220, 300),
        approxDot(140, 300),
        approxDot(140, 120),
        approxDot(60, 120),
    ]
    let springs = []

    return {
        dots, springs
    }
}