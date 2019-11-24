// Code in this function is run once, when the sketch is started.
export function setup() {
    createCanvas(windowWidth, windowHeight)
}

// Code in this function is run once per frame. If it draws the same thing each
// time, the sketch is a static image. If it draws something different on
// different frames, the sketch is an animation.
export function draw() {
    fill('black')
    rect(0, 0, width, height)
}
