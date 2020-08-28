class Chain {
constructor(bodyA,bodyB){

var option = {
bodyA : bodyA,
bodyB : bodyB,
length : 5,
stiffness : 0.05

}
this.Chain = Constraint.create(option);
World.add(world,this.Chain);
}

display(){
var pointA = this.Chain.bodyA.position;
var pointB = this.Chain.bodyB.position;
line(pointA.x , pointA.y,
    pointB.x , pointB.y
    );



}

}