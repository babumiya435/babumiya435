// Classes in JavaScript with ES6
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/6.2-classes.html
// https://youtu.be/T-HGdc8L-7w
// https://editor.p5js.org/codingtrain/sketches/qi7N4LWq

let bubble1;
let bubble2;

function setup() {
  createCanvas(500, 500);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
  constructor(x, y, r) {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-4, 4);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}
