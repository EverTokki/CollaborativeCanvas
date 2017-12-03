var socket;
var r;
var g;
var b;
var slider;
var sizecounter;

function setup() {
  socket = io.connect('localhost:3000'); //change this to the server you want to access.

  socket.on("syncDrawing", newDrawing);

  socket.on("currentState", currentState);
  //catch the message emitted

  r = random(100,255);
  g = random(100,255);
  b = random(100,255); // whenever loads up, assigns random color

  ////////////
  slider = createSlider(1,8, 5); // creates the slider. (min, max, default)
  slider.parent('slider');
  sizecounter = select(".sizecounter");
  sizecounter.html(slider.value()); // default of 5
  var canvas = createCanvas(750,500); // create canvas
  canvas.class('canvas'); 
  canvas.parent('canvas-holder');
  background(51); // gray color
  ////////////
}

function currentState(data){
  for (var i = 0; i < data.length; i++){
    strokeWeight(data[i].weight);
    stroke(data[i].red, data[i].green, data[i].blue); //for each unique data index
    line(data[i].x,data[i].y,data[i].px,data[i].py);
  }
}

function newDrawing(data){
  strokeWeight(data.weight);
  stroke(data.red,data.green,data.blue);
  line(data.x,data.y,data.px,data.py);
}

// data.red
// data["red"]
// both are same expressions
function mouseDragged() { //event handler

  sizecounter = select(".sizecounter");
  sizecounter.html(slider.value());

  strokeWeight(slider.value());

  stroke(r,g,b);
  line(mouseX,mouseY,pmouseX,pmouseY);

  var data = {
    "red":r,
    "green":g,
    "blue":b,
    "x":mouseX,
    "y":mouseY,
    "px":pmouseX,
    "py":pmouseY,
    "weight":slider.value()

}

socket.emit('mouseEvent',data)
}

function draw() {
}
