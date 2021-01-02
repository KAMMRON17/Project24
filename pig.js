class Pig {
constructor(x,y){
var pigoptions={
    'restitution':1.5,
     'friction':0.3,
     'density':1
     
}
this.body=Bodies.rectangle(x,y,60,60,pigoptions);
this.width=60;
this.height=60;
World.add(world,this.body);

}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
  push();
  translate(pos.x,pos.y);
 rotate(angle);
 rectMode(CENTER);
 fill("red");
 rect(0,0,this.width,this.height);
  pop();
}
}