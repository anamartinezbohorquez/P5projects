function setup() {
  createCanvas(600, 400);
  background(0);
  let button = createButton('press');
  button.mousePressed(() => background(random(255),random(255), random(255)));
}

function draw() {

}
