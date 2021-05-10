const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
const Constraint=Matter.Constraint

var ground,boy,stone,tree


function preload(){
boyIMG=loadImage("boyimage.png")
//treeIMG=loadImage("tree.png")

}

function setup(){
createCanvas(1200,400)
engine=Engine.create()
world=engine.world


ground=new Ground(600,400,1200,30)
stone=new Stone(86,240,40)

stoneBody=Bodies.circle(86,240,40)
World.add(world,stoneBody)

boy=createSprite(200,300,20,100);
boy.addImage(boyIMG)
boy.scale=0.6

/*tree1=createSprite(370,100,40,40)
tree1.addImage(treeIMG)
tree1.scale=0.4*/

tree1=new Tree(1050,580,30,200)

mango1=new Mango(370,150,40)
m2=new Mango(340,150,40) 
m3=new Mango(350,230,40)
m4=new Mango(362,280,40)
m5=new Mango(400,279,40)
m6=new Mango(450,250,40)


chain=new Chain(stone.body,{x:86,y:240})



Engine.run(engine)

}


function draw(){
background("pink")
Engine.update(engine)

ground.display()
tree1.display()
stone.display()
mango1.display()
m2.display()
m3.display()
m4.display()
m5.display()
m6.display()


chain.display()

detectollision(stone,mango1)
detectollision(stone,m2)
detectollision(stone,m3)
detectollision(stone,m4)
detectollision(stone,m5)
detectollision(stone,m6)

detectollision(stone,stone)



drawSprites()
}


function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}


function mouseReleased(){

chain.fly()

}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false)
Matter.Body.setStatic(lstone.body,false)


}

}

function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone.body,{x:86,y:240})
chain.attach(stone.body)




}

}