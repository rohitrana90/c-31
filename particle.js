class Particle{
 
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            friction:0.3,
        }
    this.body= Bodies.circle(x,y,radius,options)
    this.radius=radius
    World.add(world,this.body)
    
    }
    
    display(){
    
        
    push();
    ellipse(radius)
    
    }
}    