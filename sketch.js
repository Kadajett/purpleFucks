
var drops = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 100; i++) {
    drops[i] = new Drop();
  }

  drums = EDrums('x*o*x*o-')
  follow = Follow( drums )
}

function draw() {
    background( follow.getValue() * 255 )
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }

  textSize(100);
  text("\uf000", 100, 100);
}