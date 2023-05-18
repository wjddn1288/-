class Tail extends GameObject{
    constructor(container, x,y,width,height,velX,velY){
        super(container, x,y,width,height,velX,velY);

        this.div.style.background="red";
        this.div.style.borderRadius="25px";
        
    }
}