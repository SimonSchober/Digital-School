function setup() {
  
    createCanvas(400, 400);
    
  }
  
  function draw() {
    background(mouseX, mouseY, 155)
    rect(10,200-50,10,100);
    rect(400-20,mouseY,10,100);
     rect(200,200,10,10);
    text("Hello world", mouseX, mouseY);
    
    
    
    
    
  }