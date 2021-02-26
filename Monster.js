class Monster{
    constructor(x, y, radius) {
        var options = {
            'density':1.0,
            'isStatic':true
        }
        this.x=x
        this.y=y
        this.radius=radius
        this.MonsterImg=loadImage("images/Monster-02.png")
        this.body = Bodies.circle(this.x,this.y,this.radius/2, options);
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS)
        //ellipse(0, 0, this.radius/2);
        image(this.MonsterImg,0,0,this.radius/2)
        pop();
      }
}