//vermont theme 3
var myColors = [];

function setup() {
  createCanvas(800, 800);
  frameRate(0.5);
  //noLoop();
}

function draw() {
  background(237, 208, 128,150);
  noStroke();
//  myColors = [
//    color(166, 125, 3, random(255)),
//    color(191, 91, 4, random(255)),
//    color(140, 126, 114, random(255)),
//    color(217, 201, 186, random(255)),
//    color(140, 53, 3, random(255)),
//  ];

  myColors = [
    color(165,13,0,202),
    color(251,144,29,185),
    color(191,160,4,175),
    color(244,176,33,200),
    color(164,81,5,220),
  ];

  for (var j = 0; j < 50; j++) {
      fill(myColors[j%5]);
      rect(random(width), random(height), random(50,200), random(50,200));
  }
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('fall', 'png');
  }
}
