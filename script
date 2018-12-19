var dust = [];
var r, g, b;

function setup() {
  createCanvas(1900, 400);
  for (var i=0; i<60; i++) {
    dust.push(new partcul())
  }
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(127);
    for (var i=0; i<dust.length; i++) {
    dust[i].move()
    dust[i].display()
  }
  // Draw a circle

}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, width, height/2);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

function partcul() {
  this.x = random(width)
  this.y = random(height)
  this.diameter = random(10, 40)
  this.speed = 5

  this.move = function() {
    this.x += this.speed
    this.y += this.speed
    
    if (this.x < 0 || this.x > width){
     this.speed = -this.speed 
    }
    if (this.y < 0 || this.y > height){
     this.speed = -this.speed 
    }
  }

  this.display = function() {
    fill(r, g, b, 127);
    ellipse(this.x, this.y, this.diameter, this.diameter)
    strokeWeight(4);
    stroke(r, g, b);
    fill(r, g, b, 127);
    ellipse(width, height/2, 200, 200);
    
  }
}
