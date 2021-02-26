class Ground{

    constructor(x,y,width,height){
     var options={
    isStatic:true
    
    
     }
    this.body=createSprite(x,y,width,height,options)
    this.body.width=width;
    this.body.height=height
    World.add(world, this.body);
 
    }
        
    display(){
    
    var pos = this.body.position.position
      rectMode(CENTER)
      fill("red")
      rect(pos.x,pos.y,ground.width,ground.height)
    

    }
       
}    