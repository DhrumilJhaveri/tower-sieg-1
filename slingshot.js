class Slingshot{
    constructor(bodyA, pointB){
       
        var options = {
            bodyA: bodyA,
            pointB: pointB,
           length: 50,
           stiffness: 0.2
        }
        this.pointB=pointB;
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA= body;

    }
   

    display(){
   

        if(this.rope.bodyA){
            
            var pointB = this.pointB;
            var pointA=this.rope.bodyA.position;
            push ();
           
            
            stroke("#301608");
           
            strokeWeight(7);
            line(  pointB.x, pointB.y,pointA.x,pointA.y);
            
            pop ();
        }
    }
    
}