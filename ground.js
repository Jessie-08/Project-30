class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,650,1365,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1900,20);
    }
}