function setup () {
    createCanvas(window.innerWidth-50, window.innerHeight-100);
  background(0);
  persp();
}

function persp() {
  var p1 = 10;
  var p2 = canvas.width-p1;
  var p3 = canvas.height-p1;
  
  var p11 = p1+100;
  var p22 = p2-100;
  var p33 = p3-100;
  
  stroke(255);
  point(p1,p1);
  point(p2,p1);
  point(p2,p3);
  point(p1,p3);
  
  line(p1, p1, p2, p1);
  line(p1, p3, p2, p3);
  line(p1, p1, p1, p3);
  line(p2, p1, p2, p3);
  
  line(p11, p11, p22, p11);
  line(p11, p33, p22, p33);
  line(p11, p11, p11, p33);
  line(p22, p11, p22, p33);
  
  line (p1,p1,p11,p11);
  line (p1,p3,p11,p33);
  line (p2,p1,p22,p11);
  line (p2,p3,p22,p33);
  
}
