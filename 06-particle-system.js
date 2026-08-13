const particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 24, 36, 45);

  particles.push(createParticle(mouseX, mouseY));
  particles.forEach(updateParticle);
  particles.forEach(drawParticle);

  while (particles.length > 0 && particles[0].life <= 0) {
    particles.shift();
  }
}

function createParticle(x, y) {
  return {
    x,
    y,
    dx: random(-1.8, 1.8),
    dy: random(-3.5, -0.5),
    diameter: random(8, 24),
    life: 255,
  };
}

function updateParticle(particle) {
  particle.x += particle.dx;
  particle.y += particle.dy;
  particle.dy += 0.04;
  particle.life -= 3;
}

function drawParticle(particle) {
  noStroke();
  fill(255, 130, 170, particle.life);
  circle(particle.x, particle.y, particle.diameter);
}
