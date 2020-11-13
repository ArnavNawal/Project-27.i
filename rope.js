class Rope{
    constructor(bodyA,bodyB,pointB)
    {
        
        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB: pointB,
            length: 100,
            stiffness:0.5
    }
        this.rope=Constraint.create(options)
        this.pointB=pointB;
        World.add(world,this.rope)
    }
    display(){
        push();
        strokeWeight(5)
        stroke("black")
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.pointB.x,this.rope.bodyB.position.y+this.pointB.y)
            pop();
    }
   
}