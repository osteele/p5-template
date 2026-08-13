const particles = Array.from({ length: 80 }).map(() => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  dx: Math.random() * 4 - 2,
  dy: Math.random() * 4 - 2,
  diameter: Math.random() * 16 + 6,
}));

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 24, 36, 40);

  particles.forEach(particle => {
    particle.x = (particle.x + particle.dx + width) % width;
    particle.y = (particle.y + particle.dy + height) % height;

    noStroke();
    fill(130, 210, 255, 180);
    circle(particle.x, particle.y, particle.diameter);
  });
}
