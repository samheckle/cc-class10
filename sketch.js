// store my paragraph that i will add
let para 

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

  para = createP('this text is on the webpage, made with p5')
  // adjust the position of my p5 added <p>
  para.position(0,20)
  // adjusting the CSS with javascript
  // any styles applied with js will override any styles applied with CSS
  para.style('background-color:blue')
}

function draw() {
  background(220);

  text("this text is on the canvas", 10, 20)
}




