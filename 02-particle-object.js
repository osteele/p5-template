const particle = {
  x: 200,
  y: 200,
  diameter: 32,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 24, 36);

  particle.x += (mouseX - particle.x) * 0.04;
  particle.y += (mouseY - particle.y) * 0.04;

  noStroke();
  fill(255, 130, 170);
  circle(particle.x, particle.y, particle.diameter);
}
