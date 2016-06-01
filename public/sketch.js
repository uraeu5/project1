var socket;

function setup() {
  createCanvas(windowWidth,windowHeight);
  socket = io.connect('192.168.1.7:8080');
  socket.on('mouse',newDrawing);
  background(0);
}

function newDrawing(data){
    fill(100,255,0);
  ellipse(data.x,data.y,50,50);
}
function mouseDragged(){
  console.log('Sending: ' + mouseX + ',' + mouseY);
  
  var data = {
    x: mouseX,
    y: mouseY
  }
  
  socket.emit('mouse', data);
  
  fill(0,255,150);
  ellipse(mouseX,mouseY,50,50);
}
function draw() {

}