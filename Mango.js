class mango {

    constructor(x,y,r){
        this.mangoes=Bodies.circle(x,y,10,{isStatic:true});
        World.add(world,this.mangoes);
        this.r=r
        this.mangoImg=loadImage("mango.png")
    }

    display(){
        imageMode(CENTER);
        image(this.mangoImg,this.mangoes.position.x,this.mangoes.position.y,this.r*2,this.r*2)
    }
}