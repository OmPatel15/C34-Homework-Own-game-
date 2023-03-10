class Box{
    constructor(x,y,width,height,colour){
        var options ={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.colour=colour
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        var BoxPos=this.body.position
        push ()
        translate (BoxPos.x,BoxPos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill(this.colour);
        rect(0,0,this.width,this.height)
        pop ()
    }
}