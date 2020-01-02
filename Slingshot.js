class SlingShot{
    constructor(bodyA, pointB){

        //add options
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        //load images for catapult
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        //set pointB and make sling for constraint to bodies
        this.pointB = pointB
        this.sling = Constraint.create(options);

        //add them to world
        World.add(world, this.sling);
    }

    //make a fly function
    fly(){
        this.sling.bodyA = null;
    }

    //display the code
    display(){

        //display the catapult image
        image(this.sling1,200,20);
        image(this.sling2,170,20);

        //give if condition when bodyA was not null
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
           
            stroke(48,22,8);

            //change the strokeWeight of catapult when it is on the left side
            if(pointA.x<220)
            {
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else
            {
                //change the strokeWeight of catapult whenit is on the right side
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);

            }
          
           pop();
        }
    }
    
}