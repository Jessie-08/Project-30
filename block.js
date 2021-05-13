class Block{
  constructor(x, y, width, height) {
      var options = {
         density:0.0003         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
     if(this.body.speed < 3){
      imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
      }
     else{
        World.remove(world,this.body);
        var angle = this.body.angle;
      var pos= this.body.position;
      push();                                     
      translate(pos.x, pos.y);
      rotate(angle);
      this.Visiblity = this.Visiblity - 2;
      tint(255,this.Visiblity);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);    
      pop();
      }
    }
}

