const columns = 10;
const spacing = 44;
const particles = Array.from({ length: 80 }).map((_, index) => ({
  column: index % columns,
  row: Math.floor(index / columns),
  phase: index * 0.18,
}));

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 24, 36);
  const left = (width - (columns - 1) * spacing) / 2;
  const top = (height - 7 * spacing) / 2;

  particles.forEach(particle => {
    const pulse = sin(frameCount * 0.04 + particle.phase);
    const diameter = map(pulse, -1, 1, 8, 28);
    const x = left + particle.column * spacing;
    const y = top + particle.row * spacing;

    noStroke();
    fill(120 + pulse * 40, 190, 255);
    circle(x, y, diameter);
  });
}
