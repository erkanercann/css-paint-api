function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomColor() {
    return `hsl(${random(0, 360)} 100% 75%)`;
}

export { random, randomColor };
