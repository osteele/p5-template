const particles = [
  { x: 100, y: 120, diameter: 18 },
  { x: 180, y: 200, diameter: 26 },
  { x: 260, y: 160, diameter: 34 },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 24, 36);

  particles.forEach((particle, index) => {
    particle.x += 0.5 + index * 0.25;
    if (particle.x > width + particle.diameter) particle.x = -particle.diameter;

    noStroke();
    fill(255, 110 + index * 35, 170 + index * 20);
    circle(particle.x, particle.y, particle.diameter);
  });
}
