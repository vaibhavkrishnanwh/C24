class Cannon_base {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.image = loadImage("assets/cannon_base.png");
        this.width = width;
        this.height = height;
    this.body=Bodies.rectangle(this.image,x,y,this.width,this.height,options);
    World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height);
     pop();
    }
}