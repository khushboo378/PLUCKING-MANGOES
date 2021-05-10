class Chain{
constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.004,
    length:10

}

this.pointB=pointB
this.chain=Constraint.create(options)
World.add(world,this.chain)


}

attach(){


}

fly(){
this.chain.bodyA=null

}



display(){
if(this.chain.bodyA){    
var a=this.chain.bodyA.position
var b=this.pointB
strokeWeight(4)
line(a.x,a.y,b.x,b.y)

}
}


}