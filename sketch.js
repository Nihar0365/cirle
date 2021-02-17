function setup() {
  createCanvas(400,400);
 
}

function draw() {
 //fill("green"); 
 back();
    red(mouseX,mouseY);    
} 

  
function back(){
  background("white");
  fill("yellow");
  text("Move your Mouse",71,9);
  for(var i=27;i<391;i+=28){
    stroke(10,117,8);
    strokeWeight(5);
    noFill();
   ellipse(200,200,i,i);  
  } 
}
function red(x,y){
  fill("red"); 
  for(var i=27;i<391;i+=28){
    stroke(10,117,8);
    strokeWeight(7);
    noFill();
   ellipse(x,y,i,i);  
  }  

}