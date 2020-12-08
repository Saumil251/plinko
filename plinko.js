class Plinko{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.r=15
        this.body=Bodies.circle(x,y,this.r,options)
       
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER)
        fill("white")
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}